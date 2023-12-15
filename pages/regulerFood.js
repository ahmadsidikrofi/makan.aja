'use client';
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Modal from "@/components/Modal";
import RegulerExplain from "@/components/RegulerFood/RegulerExplain";
import RegulerMenu from "@/components/RegulerFood/RegulerMenu";
import RegulerBenefit from "@/components/RegulerFood/RegulerBenefit";
import CustomerReviews from "@/components/CustomerReviews";
import { Icon } from '@iconify/react';
import CarouselImg from "@/components/CarouselImg";

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
            {isModal && <Modal setIsModal={setIsModal} />}
            <div className="site-wrap">
                <div className="main-wrap" id="section-home">
                    <div className="cover_1 bg-slant-white bg-light">
                        <div className="img_bg" style={{ backgroundImage: `url('/image/slider-2.png')` }} data-stellar-background-ratio="0.5">
                            <div className="container">
                                <div className="row align-items-center justify-content-center text-center">
                                    <div className="col-md-10">
                                        <motion.h2 className="heading mb-5 d-flex align-items-center justify-content-center"
                                            initial={{ x: 300, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{
                                                duration: 0.8,
                                                type: 'spring',
                                                stiffness: 100,
                                                delay: 1
                                            }}
                                        >Makan <i className='mt-3'><Icon icon="ic:round-food-bank" width="30" height="30" color='#fb493d' /></i>aja</motion.h2>
                                        <motion.p className="sub-heading mb-5"
                                            initial={{ x: -300, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{
                                                duration: 0.5,
                                                type: 'spring',
                                                stiffness: 100,
                                                delay: 1.6
                                            }}
                                        >Mau sehat? <strong style={{ fontFamily: "Playfair Display, serif" }}>Makan</strong><Icon icon="ic:round-food-bank" width="15" height="15" color='#fb493d' /> aja. <br />Turun bb sambil makan enak.</motion.p>
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
                                            ><Link href="/regulerFood" className="smoothscroll btn btn-outline-white px-5 py-3"> Standard Menu</Link>
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
                                            ><Link href="/diet-food" className="smoothscroll btn btn-outline-white px-5 py-3"> Diet Menu</Link>
                                            </motion.p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Carousel */}
                    <CarouselImg />

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