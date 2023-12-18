'use client';
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const DietMenu = () => {
    const [activeTab, setActiveTab] = useState("breakfast");

    const menuHoverVariants = {
        hover: {
            scale: 1.2,
            textShadow: "0px 0px 8px #f8e112",
            transition: {
                type: "spring",
                stiffness: 130,
            }
        },
        hoverMenu: {
            scale: 1.1,
            textShadow: "0px 0px 8px #f8e112",
            transition: {
                type: "spring",
                stiffness: 180,
            }
        }
    }

    const handleChangeTab = (recentTab) => {
        setActiveTab(recentTab)
    }

    const renderMenuItems = () => {
        if (activeTab === "breakfast") {
            return (
                <div className="tab-pane fade show active" id="pills-breakfast" role="tabpanel" aria-labelledby="pills-breakfast-tab">
                    <motion.div className="d-block d-md-flex menu-food-item"
                        variants={menuHoverVariants}
                        whileHover="hoverMenu"
                    >
                        <div className="text order-1 mb-3">
                            <Image width={100} height={100} src="/image/img_1.jpg" alt="Free Website Template for Restaurants by Free-Template.co" />
                            <h3><a href="#">Vegan Tteobokki (Korean Spicy Rice Cake)</a></h3>
                            <p>Nikmati Vegan Tteokbokki dalam 15 menit! Hanya dengan 6 bahan yang mudah ditemukan di toko Asia terdekat atau online di Amazon. Rasa Pedas, manis, kenyal, dan sangat mudah!.</p>
                        </div>
                        <div className="price order-2">
                            <strong>Rp34.800</strong>
                        </div>
                    </motion.div>

                    <motion.div className="d-block d-md-flex menu-food-item"
                        variants={menuHoverVariants}
                        whileHover="hoverMenu"
                    >
                        <div className="text order-1 mb-3">
                            <Image width={100} height={100} src="/image/img_2.jpg" alt="Free Website Template for Restaurants by Free-Template.co" />
                            <h3><a href="#">Asiatique Dory with Hainanese Red Rice + FREE Crispy Broccoli</a></h3>
                            <p>Rasakan cita rasa istimewa Asiatique Dory disajikan dengan Hainanese Red Rice, dan dapatkan bonus Crispy Broccoli yang renyah secara GRATIS!.</p>
                        </div>
                        <div className="price order-2">
                            <strong>Rp39.900</strong>
                        </div>
                    </motion.div>

                    <motion.div className="d-block d-md-flex menu-food-item"
                        variants={menuHoverVariants}
                        whileHover="hoverMenu"
                    >
                        <div className="text order-1 mb-3">
                            <Image width={100} height={100} src="/image/img_3.jpg" alt="Free Website Template for Restaurants by Free-Template.co" />
                            <h3><a href="#">Ginger Chicken Ramen Kuroda + FREE Korean Mayak Egg</a></h3>
                            <p>Nikmati kelezatan Ginger Chicken Ramen Kuroda dan dapatkan bonus Korean Mayak Egg yang lezat secara GRATIS!.</p>
                        </div>
                        <div className="price order-2">
                            <strong>Rp29.500</strong>
                        </div>
                    </motion.div>

                    <motion.div className="d-block d-md-flex menu-food-item"
                        variants={menuHoverVariants}
                        whileHover="hoverMenu"
                    >
                        <div className="text order-1 mb-3">
                            <Image width={100} height={100} src="/image/img_1.jpg" alt="Free Website Template for Restaurants by Free-Template.co" />
                            <h3><a href="#">Japanese Truffle Chicken Katsu Sando + FREE Salad</a></h3>
                            <p>Santaplah Japanese Truffle Chicken Katsu Sando yang lezat ini, Rasakan harmoni cita rasa yang memanjakan lidah dalam setiap gigitan!</p>
                        </div>
                        <div className="price order-2">
                            <strong>Rp36.700</strong>
                        </div>
                    </motion.div>
                </div>
            )

        } else if (activeTab === "lunch") {
            return (
                <div className="tab-pane fade show active" id="pills-lunch" role="tabpanel" aria-labelledby="pills-lunch-tab" >
                    <div className="d-block d-md-flex menu-food-item">
                        <div className="text order-1 mb-3">
                            <Image width={100} height={100} src="/image/img_2.jpg" alt="Free Website Template for Restaurants by Free-Template.co" />
                            <h3><a href="#">Kungpao Chicken with Hainanese Red Rice</a></h3>
                            <p>Nikmati cita rasa mirip Kung Pao Chicken ala restoran Tiongkok. Resep ini menggunakan ayam lembut melalui cara velveting (teknik perendaman).</p>
                        </div>
                        <div className="price order-2">
                            <strong>Rp47.300</strong>
                        </div>
                    </div>

                    <div className="d-block d-md-flex menu-food-item">
                        <div className="text order-1 mb-3">
                            <Image width={100} height={100} src="/image/img_1.jpg" alt="Free Website Template for Restaurants by Free-Template.co" />
                            <h3><a href="#">Jamaican Chicken Wings</a></h3>
                            <p>Crisp tortilla and plantain chips covered with lightly spiced ground beef, melted cheese, pickled jalapeños, guacamole, sour cream and salsa.</p>
                        </div>
                        <div className="price order-2">
                            <strong>$15.99</strong>
                        </div>
                    </div>

                    <div className="d-block d-md-flex menu-food-item">
                        <div className="text order-1 mb-3">
                            <Image width={100} height={100} src="/image/img_3.jpg" alt="Free Website Template for Restaurants by Free-Template.co" />
                            <h3><a href="#">Bahamian Seafood Chowder</a></h3>
                            <p>A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes.</p>
                        </div>
                        <div className="price order-2">
                            <strong>$10.99</strong>
                        </div>
                    </div>

                    <div className="d-block d-md-flex menu-food-item">
                        <div className="text order-1 mb-3">
                            <Image width={100} height={100} src="/image/img_2.jpg" alt="Free Website Template for Restaurants by Free-Template.co" />
                            <h3><a href="#">Grilled Chicken &amp; Tropical Fruit on Mixed Greens</a></h3>
                            <p>Lobster and tender shrimp, with onions, sweet peppers, spinach and our three cheese blend. Griddled and served with tomato salsa and sour cream.</p>
                        </div>
                        <div className="price order-2">
                            <strong>$12.99</strong>
                        </div>
                    </div>

                </div>
            )

        } else if (activeTab === "dinner") {
            return (
                <div className="tab-pane fade show active" id="pills-dinner" role="tabpanel" aria-labelledby="pills-dinner-tab">
                    <div className="d-block d-md-flex menu-food-item">
                        <div className="text order-1 mb-3">
                            <Image width={100} height={100} src="/image/img_3.jpg" alt="Free Website Template for Restaurants by Free-Template.co" />
                            <h3><a href="#">Grilled Top Sirlion Steak</a></h3>
                            <p>Spinach and artichokes in a creamy cheese dip with warm tortilla chips &amp; salsa.</p>
                        </div>
                        <div className="price order-2">
                            <strong>$18.99</strong>
                        </div>
                    </div>

                    <div className="d-block d-md-flex menu-food-item">
                        <div className="text order-1 mb-3">
                            <Image width={100} height={100} src="/image/img_1.jpg" alt="Free Website Template for Restaurants by Free-Template.co" />
                            <h3><a href="#">Steak Oscar</a></h3>
                            <p>Crisp tortilla and plantain chips covered with lightly spiced ground beef, melted cheese, pickled jalapeños, guacamole, sour cream and salsa.</p>
                        </div>
                        <div className="price order-2">
                            <strong>$23.99</strong>
                        </div>
                    </div>

                    <div className="d-block d-md-flex menu-food-item">
                        <div className="text order-1 mb-3">
                            <Image width={100} height={100} src="/image/img_2.jpg" alt="Free Website Template for Restaurants by Free-Template.co" />
                            <h3><a href="#">Skirt Steak Churrasco</a></h3>
                            <p>A heaping mountain of rings, handmade with Panko breading and shredded coconut flakes.</p>
                        </div>
                        <div className="price order-2">
                            <strong>$20.99</strong>
                        </div>
                    </div>

                    <div className="d-block d-md-flex menu-food-item">
                        <div className="text order-1 mb-3">
                            <Image width={100} height={100} src="/image/img_3.jpg" alt="Free Website Template for Restaurants by Free-Template.co" />
                            <h3><a href="#">Grilled Beef Steak</a></h3>
                            <p>Lobster and tender shrimp, with onions, sweet peppers, spinach and our three cheese blend. Griddled and served with tomato salsa and sour cream.</p>
                        </div>
                        <div className="price order-2">
                            <strong>$20.99</strong>
                        </div>
                    </div>
                </div>
            )
        }
    };
    return (
        <>
            <div className="section" id="our-menu"
                data-aos="zoom-in"
            >
                <div className="container">
                    <div className="row section-heading justify-content-center mb-5">
                        <div className="col-md-8 text-center">
                            <h2 className="heading mb-3">Menu</h2>
                            {/* <p className="sub-heading mb-5">Free Website Template For Restaurants Made by <a href="#">Free-Template.co</a></p> */}
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8">
                            <ul className="d-flex justify-content-center gap-3 nav site-tab-nav" id="pills-tab" role="tablist">
                                <motion.li className={`nav-item`} 
                                    variants={menuHoverVariants}
                                    whileHover="hover"
                                >
                                    <a onClick={() => handleChangeTab('breakfast')} className={`nav-link ${activeTab === "breakfast" ? "active" : ""}`} >Breakfast</a>
                                </motion.li>
                                <motion.li className={`nav-item`}
                                    variants={menuHoverVariants}
                                    whileHover="hover"
                                >
                                    <a onClick={() => handleChangeTab('lunch')} className={`nav-link ${activeTab === "lunch" ? "active" : ""}`}>Brunch</a>
                                </motion.li>
                                <motion.li className="nav-item"
                                    variants={menuHoverVariants}
                                    whileHover="hover"
                                >
                                    <a onClick={() => handleChangeTab("dinner")} className={`nav-link ${activeTab === "dinner" ? "active" : ""}` } >Dinner</a>
                                </motion.li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                {renderMenuItems()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DietMenu;