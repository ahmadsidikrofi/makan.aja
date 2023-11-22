import { motion } from "framer-motion";
import { Icon } from '@iconify/react';
import Link from "next/link";

const Header = () => {
    return (
        <nav className="navbarContainer">
            <ul className="ulNavbar" style={{ gap: 70 }}>
                <motion.li
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: -200, opacity: 1, }}
                    transition={{ type: "spring", stiffness: 100 }}
                    whileHover={{ 
                        scale: 1.1,
                        textShadow: "0px 12px 8px #f8e112",
                        transition: {
                            type: 'spring',
                            stiffness: 700
                        }
                    }}
                ><Link href="/"><Icon icon="material-symbols:arrow-back-ios" /></Link></motion.li>
                <motion.li
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, }}
                    transition={{ type: "spring", stiffness: 80 }}
                    whileHover={{ 
                        scale: 1.1,
                        textShadow: "0px 12px 8px #f8e112",
                        transition: {
                            type: 'spring',
                            stiffness: 700
                        }
                    }}
                ><a href="#section-home">Home</a></motion.li>
                <motion.li
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, }}
                    transition={{ type: "spring", stiffness: 80 }}
                    whileHover={{ 
                        scale: 1.1,
                        textShadow: "0px 12px 8px #f8e112",
                        transition: {
                            type: 'spring',
                            stiffness: 700
                        }
                    }}
                ><a href="#reguler-food">Reguler Food</a></motion.li>
                <motion.li
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, }}
                    transition={{ type: "spring", stiffness: 80 }}
                    whileHover={{ 
                        scale: 1.1,
                        textShadow: "0px 12px 8px #f8e112",
                        transition: {
                            type: 'spring',
                            stiffness: 700
                        }
                    }}
                ><a href="#our-menu">Our Menu</a></motion.li>
                <motion.li
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, }}
                    transition={{ type: "spring", stiffness: 80 }}
                    whileHover={{ 
                        scale: 1.1,
                        textShadow: "0px 12px 8px #f8e112",
                        transition: {
                            type: 'spring',
                            stiffness: 700
                        }
                    }}
                >
                <a href="#other-services">Other Services</a></motion.li>
            </ul>
        </nav>
    );
}

export default Header;