'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import { Icon } from '@iconify/react';


const Jumbotron = () => {
    return ( 
        <div className="cover_1 bg-slant-white">
        <div className="img_bg" style={{ backgroundImage: `url('/image/slider-2.png')` }} data-stellar-background-ratio="0.5">
          <div className="container">
            <div className="row align-items-center justify-content-center text-center">
              <div className="col-md-10">
                <motion.h2 className="heading mb-5 mt-5 d-flex align-items-center justify-content-center"
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
    );
}
 
export default Jumbotron;