import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const RegulerBenefit = () => {
    const benefitVariants = {
        hover: {
            scale: 1.1,
            textShadow: "0px 0px 8px #f8e112",
            x: 0,
            originX: 1,
            transition: {
                type: "spring",
                stiffness: 700,
                delay: 0,
                duration: 0.3,
            }
        },
    }

    return (
        <>
            <div className="section bg-white services-section" data-aos="zoom-out">
                <div className="container">
                    <div className="row section-heading justify-content-center mb-5">
                        <div className="col-md-8 text-center">
                            <h2 className="heading mb-3">Reguler Benefit</h2>
                            <p className="sub-heading mb-5">Beberapa layanan lain yang tidak dapat kamu temukan dari sumber diet manapun check</p>
                        </div>
                    </div>
                    <div className="row">
                        <motion.div className="col-m mb-5d-6 col-lg-4" data-aos="zoom-out"
                            variants={benefitVariants}
                            whileHover="hover"
                        >
                            <div className="media feature-icon d-block text-center">
                                <div className="icon">
                                    <span className="flaticon-soup"><Icon icon="tabler:soup" /></span>
                                </div>
                                <div className="media-body">
                                    <h3>Quality Cuisine</h3>
                                    <p>Empanada adalah roti isi atau pastri panggang atau goreng di banyak negara di Amerika Latin, Eropa Selatan, dan bagian dari Asia Tenggara.</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="col-md-6 col-lg-4 mb-5" data-aos="zoom-out" data-aos-delay="100"
                            variants={benefitVariants}
                            whileHover="hover"
                        >
                            <div className="media feature-icon d-block text-center">
                                <div className="icon">
                                    <span className="flaticon-vegetables"><Icon icon="twemoji:green-salad" /></span>
                                </div>
                                <div className="media-body">
                                    <h3>Fresh Food</h3>
                                    <p>Empanada adalah roti isi atau pastri panggang atau goreng di banyak negara di Amerika Latin, Eropa Selatan, dan bagian dari Asia Tenggara.</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="col-md-6 col-lg-4 mb-5" data-aos="zoom-out" data-aos-delay="300"
                            variants={benefitVariants}
                            whileHover="hover"
                        >
                            <div className="media feature-icon d-block text-center">
                                <div className="icon">
                                    <span className="flaticon-pancake"><Icon icon="noto:pancakes" /></span>
                                </div>
                                <div className="media-body">
                                    <h3>Bread &amp; Pancake</h3>
                                    <p>Empanada adalah roti isi atau pastri panggang atau goreng di banyak negara di Amerika Latin, Eropa Selatan, dan bagian dari Asia Tenggara.</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="col-md-6 col-lg-4 mb-5" data-aos="zoom-out" data-aos-delay="500"
                            variants={benefitVariants}
                            whileHover="hover"
                        >
                            <div className="media feature-icon d-block text-center">
                                <div className="icon">
                                    <span className="flaticon-tray"><Icon icon="eos-icons:service-outlined" /></span>
                                </div>
                                <div className="media-body">
                                    <h3>Reserve Now</h3>
                                    <p>Empanada adalah roti isi atau pastri panggang atau goreng di banyak negara di Amerika Latin, Eropa Selatan, dan bagian dari Asia Tenggara.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div className="col-md-6 col-lg-4 mb-5" data-aos="zoom-out" data-aos-delay="300"
                            variants={benefitVariants}
                            whileHover="hover"
                        >
                            <div className="media feature-icon d-block text-center">
                                <div className="icon">
                                    <span className="flaticon-salad"><Icon icon="twemoji:green-salad" /></span>
                                </div>
                                <div className="media-body">
                                    <h3>Fresh Vegies Salad</h3>
                                    <p>Empanada adalah roti isi atau pastri panggang atau goreng di banyak negara di Amerika Latin, Eropa Selatan, dan bagian dari Asia Tenggara.</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="col-md-6 col-lg-4 mb-5" data-aos="zoom-out" data-aos-delay="500"
                            variants={benefitVariants}
                            whileHover="hover"
                        >
                            <div className="media feature-icon d-block text-center">
                                <div className="icon">
                                    <span className="flaticon-chicken"><Icon icon="openmoji:chicken" /></span>
                                </div>
                                <div className="media-body">
                                    <h3>Whole Chicken</h3>
                                    <p>Empanada adalah roti isi atau pastri panggang atau goreng di banyak negara di Amerika Latin, Eropa Selatan, dan bagian dari Asia Tenggara.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegulerBenefit;