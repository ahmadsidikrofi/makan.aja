import { usePathname } from "next/navigation";
import Header from "./Header";

const Layout = ({children}) => {
    const pathname = usePathname();
    return ( 
        <div>
            {pathname === "/" ? "" : <Header />}
            {children}
        </div>
    );
}
 
export default Layout;