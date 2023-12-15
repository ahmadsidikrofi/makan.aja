import { motion } from 'framer-motion';
import OtherModal from './OtherModal';
import { useState, useEffect } from 'react';
const MenuHeader = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isModal, setIsModal] = useState(false);

    const handleScroll = () => {
        const isScrolled = window.scrollY > 10;
        setScrolled(isScrolled);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Bersihkan event listener saat komponen di-unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const headerClass = scrolled ? 'site-header scrolled' : 'site-header';

    const handleModalOpen = () => {
        OtherModal(() => setIsModal(false))
    }
    return (
        <>
            <header className={headerClass}>
                <motion.div className="row d-flex align-items-center justify-content-center"
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, }}
                    transition={{
                        duration: .8,
                        type: 'spring',
                        stiffness: 150,
                    }}
                    whileHover={{
                        scale: 1.2,
                        textShadow: "0px 0px 8px white",
                    }}
                >
                    <div className="col-2 col-md-6 text-center site-logo-wrap">
                        <a className="site-logo" onClick={handleModalOpen} >M</a>
                    </div>
                </motion.div>
            </header>
            {isModal && <OtherModal setIsModal={setIsModal} />}
        </>
    );
}

export default MenuHeader;