import jwt from 'jsonwebtoken';
import { pool } from "../../../lib/db";

const verifyAuth = async (req, res, next) => {
  try {
   

    const bearerToken = req.headers['authorization'];

    if (!bearerToken || !bearerToken.startsWith('Bearer '))   return NextResponse.json({
     message: "Unauthorized: Missing or invalid token",
     status: 401,
     success: false,
   });
     
    
    const token = bearerToken.split(' ')[1];

    console.log(token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log(decoded);

    
    if (!decoded.id) {
     return next(new ErrorResponse("Unauthorized user", 401));
   }

  const [checkUserId] = await pool.promise().query(getCusByID, [decoded.userid]);

   if (checkUserId.length === 0) return NextResponse.json({ message: "Unauthorized user", status: 401, success: false,});
     
   
   req.user = checkUserId[0];

      next();
  } catch (err) {
    console.error('Error verifying token:', err);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export default verifyAuth;
