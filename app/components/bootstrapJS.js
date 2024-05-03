"use client"
import { useEffect } from "react"

const BootstrapJs = () => {

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.js');
    }, []);

    return null
}
export default BootstrapJs