import Link from "next/link";
import "../styles/globals.css";
import Image from 'next/image';

const NewsLetter = () => {
     return (
          <>
               <form className="">
                    <div className=" mt-4">
                         <input type="text" placeholder="Name" className=" rounded-2 bg-secondary text-white p-2 w-100" required />
                    </div>
                    <div className=" mt-4">
                         <input type="text" className="rounded-2 bg-secondary text-white p-2 w-100" placeholder="Email Address" required />
                    </div>

                    <div className=" text-center mt-4">
                         {/* <div className="btn-layer text-center"></div> */}
                         {/* <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button> */}
                         <input type="button" className="btn rounded-5 p-2 w-75" value="Login" />
                    </div>
               </form>
          </>
     )
}

export default NewsLetter;

