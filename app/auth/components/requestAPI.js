
const apiUrl = process.env.NEXT_PUBLIC_API_URL

const sendData = async (formData) => {
     try {
       const res = await fetch(`${apiUrl}/api/auth`, {
         method: 'POST',
         body: JSON.stringify(formData),
         cache: 'no-store',
         headers: { 
           "Content-Type": "application/json",
         },
       })
       if (!res.ok) {
        //  throw new Error('Failed to fetch data')
         return res.json()
       }
   
       console.log(res);
       return res.json();
     } catch (error) {
       console.error('An error occurred:', error);
     }
   }

   export default sendData;