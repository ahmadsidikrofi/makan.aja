import { usePathname } from "next/navigation";
import Header from "./Header";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Layout = ({children}) => {
    const pathname = usePathname();
    return ( 
        <div>
            {pathname === "/" || pathname === "/auth/login"  || pathname === "/contact" || pathname === "/harga-paket"
            
            ? "" : 
            <Header />
            }
            <FloatingWhatsApp />
            {children}
        </div>
    );
}
 
export default Layout;