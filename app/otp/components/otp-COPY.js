"use client"

import OtpInput from 'react-otp-input';
// import { useEffect, useState } from "react";
import React, { useState, useRef, useEffect } from 'react';


const InputOTPsssss =  (
     value = '',
     numInputs = 4,
     onChange,
     onPaste,
     renderInput,
     shouldAutoFocus = false,
     inputType = 'text',
     renderSeparator,
     placeholder,
     containerStyle,
     inputStyle,
     skipDefaultStyles = false,
) => {
     const [activeInput, setActiveInput] = useState(0);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, numInputs);
  }, [numInputs]);

  useEffect(() => {
    if (shouldAutoFocus) {
      inputRefs.current[0]?.focus();
    }
  }, [shouldAutoFocus]);


  const getPlaceholderValue = () => {
     if (typeof placeholder === 'string') {
       if (placeholder.length === numInputs) {
         return placeholder;
       }
 
       if (placeholder.length > 0) {
         console.error('Length of the placeholder should be equal to the number of inputs.');
       }
     }
     return undefined;
   };
 
   const isInputValueValid = (value) => {
     const isTypeValid = isInputNum ? !isNaN(Number(value)) : typeof value === 'string';
     return isTypeValid && value.trim().length === 1;
   };
 
   const handleChange = (event) => {
     const { value } = event.target;
 
     if (isInputValueValid(value)) {
       changeCodeAtFocus(value);
       focusInput(activeInput + 1);
     }
   };
 
   const handleInputChange = (event) => {
     const { nativeEvent } = event;
     const value = event.target.value;
 
     if (!isInputValueValid(value)) {
       // Pasting from the native autofill suggestion on a mobile device can pass
       // the pasted string as one long input to one of the cells. This ensures
       // that we handle the full input and not just the first character.
       if (value.length === numInputs) {
         const hasInvalidInput = value.split('').some((cellInput) => !isInputValueValid(cellInput));
         if (!hasInvalidInput) {
           handleOTPChange(value.split(''));
           focusInput(numInputs - 1);
         }
       }
 
       // @ts-expect-error - This was added previously to handle and edge case
       // for dealing with keyCode "229 Unidentified" on Android. Check if this is
       // still needed.
       if (nativeEvent.data === null && nativeEvent.inputType === 'deleteContentBackward') {
         event.preventDefault();
         changeCodeAtFocus('');
         focusInput(activeInput - 1);
       }
 
       // Clear the input if it's not valid value because firefox allows
       // pasting non-numeric characters in a number type input
       event.target.value = '';
     }
   };
 
   const handleFocus = (event) => (index) => {
     setActiveInput(index);
     event.target.select();
   };
 
   const handleBlur = () => {
     setActiveInput(activeInput - 1);
   };
 
   const handleKeyDown = (event) => {
     const otp = getOTPValue();
     if ([event.code, event.key].includes('Backspace')) {
       event.preventDefault();
       changeCodeAtFocus('');
       focusInput(activeInput - 1);
     } else if (event.code === 'Delete') {
       event.preventDefault();
       changeCodeAtFocus('');
     } else if (event.code === 'ArrowLeft') {
       event.preventDefault();
       focusInput(activeInput - 1);
     } else if (event.code === 'ArrowRight') {
       event.preventDefault();
       focusInput(activeInput + 1);
     }
     // React does not trigger onChange when the same value is entered
     // again. So we need to focus the next input manually in this case.
     else if (event.key === otp[activeInput]) {
       event.preventDefault();
       focusInput(activeInput + 1);
     } else if (
       event.code === 'Spacebar' ||
       event.code === 'Space' ||
       event.code === 'ArrowUp' ||
       event.code === 'ArrowDown'
     ) {
       event.preventDefault();
     }
   };
 
   const focusInput = (index) => {
     const activeInput = Math.max(Math.min(numInputs - 1, index), 0);
 
     if (inputRefs.current[activeInput]) {
       inputRefs.current[activeInput]?.focus();
       inputRefs.current[activeInput]?.select();
       setActiveInput(activeInput);
     }
   };
 
   const changeCodeAtFocus = (value) => {
     const otp = getOTPValue();
     otp[activeInput] = value[0];
     handleOTPChange(otp);
   };
 
   const handleOTPChange = (otp) => {
     const otpValue = otp.join('');
     onChange(otpValue);
   };
 
   const handlePaste = (event) => {
     event.preventDefault();
 
     const otp = getOTPValue();
     let nextActiveInput = activeInput;
 
     // Get pastedData in an array of max size (num of inputs - current position)
     const pastedData = event.clipboardData
       .getData('text/plain')
       .slice(0, numInputs - activeInput)
       .split('');
 
     // Prevent pasting if the clipboard data contains non-numeric values for number inputs
     if (isInputNum && pastedData.some((value) => isNaN(Number(value)))) {
       return;
     }
 
     // Paste data from focused input onwards
     for (let pos = 0; pos < numInputs; ++pos) {
       if (pos >= activeInput && pastedData.length > 0) {
         otp[pos] = pastedData.shift() ?? '';
         nextActiveInput++;
       }
     }
 
     focusInput(nextActiveInput);
     handleOTPChange(otp);
   };

  return (
    <>
    <div>

    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        ...(containerStyle && typeof containerStyle === 'object' ? containerStyle : {}),
      }}
      className={typeof containerStyle === 'string' ? containerStyle : undefined}
      onPaste={onPaste}
    >
      {Array.from({ length: numInputs }, (_, index) => index).map((index) => (
        <React.Fragment key={index}>
          {renderInput(
            {
              value: (value[index] ?? ''),
              placeholder: placeholder && placeholder[index] ? placeholder[index] : undefined,
              ref: (element) => (inputRefs.current[index] = element),
              onChange: handleChange,
              onFocus: (event) => handleFocus(event)(index),
              onBlur: handleBlur,
              onKeyDown: handleKeyDown,
              onPaste: handlePaste,
              autoComplete: 'off',
              'aria-label': `Please enter OTP character ${index + 1}`,
              style: {
                width: '1em',
                textAlign: 'center',
                ...(inputStyle && typeof inputStyle === 'object' ? inputStyle : {}),
              },
              className: typeof inputStyle === 'string' ? inputStyle : undefined,
              type: inputType,
              inputMode: inputType === 'number' || inputType === 'tel' ? 'numeric' : 'text',
              onInput: handleInputChange,
            },
            index
          )}
          {index < numInputs - 1 && (typeof renderSeparator === 'function' ? renderSeparator(index) : renderSeparator)}
        </React.Fragment>
      ))}
    </div>
    </div>
    
    </>
  );
}

export default InputOTPsssss;