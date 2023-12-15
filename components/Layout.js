import { usePathname } from "next/navigation";
import Header from "./Header";

const Layout = ({children}) => {
    const pathname = usePathname();
    return ( 
        <div>
            {pathname === "/" || pathname === "/auth/login"  || pathname === "/contact" || pathname === "/harga-paket"
            
            ? "" : <Header />}
            {children}
        </div>
    );
}
 
export default Layout;