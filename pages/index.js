
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MainModal from '@/components/MainModal';

export default function Home() {
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
    MainModal({ setIsModal });
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
      {isModal && <MainModal setIsModal={setIsModal} />}
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
                      ><a href="#section-reservation" className="smoothscroll btn btn-outline-white px-5 py-3"> Diet Menu</a>
                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section" data-aos="fade-up">
            <div className="container">
              <div className="row section-heading justify-content-center mb-5">
                <div className="col-md-8 text-center">
                  <h2 className="heading mb-3">Dapatkan makanan terenakmu</h2>
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
          </div>
        </div>
      </div>
    </>
  )
}
