import InputOTP from "../components/otp";

const OTP = ({ params }) => {
    // Decode the URL-encoded email
    const email = decodeURIComponent(params.email);

    return (
        <>
            <InputOTP email={email} />
        </>
    );
};

export default OTP;
