import verifyAuth from "./mddleware"

export default function protectedRoute(handler) {
     return async (req, res) => {
       await verifyAuth(req, res);
       return handler(req, res);
     };
   }