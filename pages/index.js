'use client';
import Link from 'next/link'
import { useState, useEffect, useRef, HTMLDivElement } from "react";
import { motion, useScroll, useTransform   } from "framer-motion";
import MainModal from '@/components/MainModal';
import { Icon } from '@iconify/react';
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"]
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0.4, 1], [1, 1]);

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
    MainModal({ setIsModal });
  }


  return (
    <>
      {/* <WhatsupPop /> */}
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
      {isModal && <MainModal setIsModal={setIsModal} />}
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
                    >Makan <i className='mt-3'><Icon icon="ic:round-food-bank" width="30" height="30" color='#fb493d' /></i></motion.h2>
                    <motion.p className="sub-heading mb-5"
                      initial={{ x: -300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        type: 'spring',
                        stiffness: 100,
                        delay: 1.6
                      }}
                    >Mau sehat? Makan <Icon icon="ic:round-food-bank" width="15" height="15" color='#fb493d' /> aja. <br />Turun bb sambil makan enak.</motion.p>
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
                      ><Link href="/regulerFood" className="smoothscroll btn btn-outline-white px-5 py-3"> Reguler Food</Link>
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
                      ><Link href="/diet-food" className="smoothscroll btn btn-outline-white px-5 py-3"> Diet Food</Link>
                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <motion.div className="" 
            // ref={ref}
            style={{ scale: scaleProgress, opacity: opacityProgress,  background: "#ffbf25" }}
          >
            <div className="container">
              <div className="row section-heading justify-content-center mb-5">
                <div className="col-md-8 text-center">
                  <motion.h2 className="heading mb-3 mt-5">Dapatkan makanan terenakmu</motion.h2>
                  {/* <p className="sub-heading mb-5">Free Website Template For Restaurants Made by <a href="#">Free-Template.co</a></p> */}
                </div>
              </div>
              <div className="row">

                <div className="ftco-46">
                  <div className="ftco-46-row d-flex flex-column flex-lg-row">
                    <div className="ftco-46-image" style={{ backgroundImage: `url(/image/img_1.jpg)` }}></div>
                    <div className="ftco-46-text ftco-46-arrow-left">
                      <h4 className="ftco-46-subheading">Vegies</h4>
                      <h3 className="ftco-46-heading">Beef Empanadas</h3>
                      <p className="mb-5">Empanada adalah roti isi atau pastri panggang atau goreng di banyak negara di Amerika Latin, Eropa Selatan, dan bagian dari Asia Tenggara. Namanya berasal dari kata kerja empanar, yang berarti bungkus atau mantel dalam roti.</p>
                      <p><a href="#" className="btn-link">Learn More <span className="ion-android-arrow-forward"></span></a></p>
                    </div>
                    <div className="ftco-46-image" style={{ backgroundImage: `url(/image/img_2.jpg)` }}></div>
                  </div>

                  <div className="ftco-46-row d-flex flex-column flex-lg-row">
                    <div className="ftco-46-text ftco-46-arrow-right">
                      <h4 className="ftco-46-subheading">Food</h4>
                      <h3 className="ftco-46-heading">Buttermilk Chicken Jibaritos</h3>
                      <p className="mb-5">Empanada adalah roti isi atau pastri panggang atau goreng di banyak negara di Amerika Latin, Eropa Selatan, dan bagian dari Asia Tenggara. Namanya berasal dari kata kerja empanar, yang berarti bungkus atau mantel dalam roti.</p>
                      <p><a href="#" className="btn-link">Learn More <span className="ion-android-arrow-forward"></span></a></p>
                    </div>
                    <div className="ftco-46-image" style={{ backgroundImage: `url(/image/img_3.jpg)` }}></div>
                    <div className="ftco-46-text ftco-46-arrow-up">
                      <h4 className="ftco-46-subheading">Food</h4>
                      <h3 className="ftco-46-heading">Chicken Chimichurri Croquettes</h3>
                      <p className="mb-5">Empanada adalah roti isi atau pastri panggang atau goreng di banyak negara di Amerika Latin, Eropa Selatan, dan bagian dari Asia Tenggara. Namanya berasal dari kata kerja empanar, yang berarti bungkus atau mantel dalam roti.</p>
                      <p><a href="#" className="btn-link">Learn More <span className="ion-android-arrow-forward"></span></a></p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
