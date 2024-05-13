const getAuthToken = () => {
     // Check if authToken is stored in localStorage
     const localStorageToken = localStorage.getItem('authToken');
     if (localStorageToken) {
       return localStorageToken;
     }
   
     // If not found in localStorage, check sessionStorage
     const sessionStorageToken = sessionStorage.getItem('authToken');
     if (sessionStorageToken) {
       return sessionStorageToken;
     }
   
     // If authToken is not found in both localStorage and sessionStorage, return null
     return null;
   };

   
   export default getAuthToken;

  //  const getEmail = 