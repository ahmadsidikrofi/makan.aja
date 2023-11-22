import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { motion } from "framer-motion";
import Modal from "@/components/Modal";
import RegulerExplain from "@/components/RegulerExplain";
import RegulerMenu from "@/components/RegulerMenu";
import RegulerBenefit from "@/components/RegulerBenefit";
import CustomerReviews from "@/components/CustomerReviews";

const RegulerFood = () => {
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
        Modal(() => setIsModal(false))
    }

    return (
        <>
            <header className={headerClass}>
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-2 col-md-6 text-center site-logo-wrap">
                        <a className="site-logo" onClick={handleModalOpen}>M</a>
                    </div>
                </div>
            </header>
            {isModal && <Modal setIsModal={setIsModal} />}
            <div className="site-wrap">
                <div className="main-wrap" id="section-home">
                    <div className="cover_1 bg-slant-white bg-light">
                        <div className="img_bg" style={{ backgroundImage: `url('/image/slider-2.png')` }} data-stellar-background-ratio="0.5">
                            <div className="container">
                                <div className="row align-items-center justify-content-center text-center">
                                    <div className="col-md-10" data-aos="fade-up">
                                        <h2 className="heading mb-5">Makan.aja</h2>
                                        <p className="sub-heading mb-5">Makan apapun tetap sehat. <br />Turun bb sambil makan enak.</p>
                                        <div className="d-flex justify-content-center gap-5">
                                            <motion.p style={{ fontFamily: 'quicksand' }}
                                                initial={{ y: 100, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    textShadow: "0px 0px 8px white",
                                                    transition: {
                                                        repeat: Infinity,
                                                        repeatType: "reverse",
                                                        duration: 0.3,
                                                    }
                                                }}
                                            ><a href="#section-reservation" className="smoothscroll btn btn-outline-white px-5 py-3"> Standard Menu</a>
                                            </motion.p>
                                            <motion.p style={{ fontFamily: 'quicksand' }}
                                                initial={{ y: 100, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                whileHover={{
                                                    scale: 1.1,
                                                    textShadow: "0px 0px 8px white",
                                                    transition: {
                                                        repeat: Infinity,
                                                        repeatType: "reverse",
                                                        duration: 0.3,
                                                    }
                                                }}
                                            ><a href="#section-reservation" className="smoothscroll btn btn-outline-white px-5 py-3"> Diet Menu</a>
                                            </motion.p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Reguler Explain */}
                    <RegulerExplain />

                    {/* Reguler Menu */}
                    <RegulerMenu />

                    {/* Reguler Benefit */}
                    <RegulerBenefit />

                    {/* Customer Reviews */}
                    <CustomerReviews />
                </div>
            </div>
        </>
    );
}

export default RegulerFood;