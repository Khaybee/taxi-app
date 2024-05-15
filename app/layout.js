
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.css'
import './styles/default.css'
import './styles/fontawesome.css'
import BootstrapJs from "./components/bootstrapJS";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
// import "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
import "leaflet/dist/leaflet.css"
import Swal from 'sweetalert2'

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
      <BootstrapJs />
      <ToastContainer />
      </body>
    </html>
  );
}
