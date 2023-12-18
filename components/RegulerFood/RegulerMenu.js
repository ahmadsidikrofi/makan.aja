'use client';
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const RegulerMenu = () => {
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
                            <h3><a href="#">Spaghetti Ayam Geprek &amp; FREE Croutons</a></h3>
                            <p>Kali ini kita nikmatin ayam geprek pake PASTAAA 😃😃😍😍😍😄 ndak kalah enak dimakan sama nasi.. pake spaghetti juga.</p>
                        </div>
                        <div className="price order-2">
                            <strong>Rp25.000</strong>
                        </div>
                    </motion.div>

                    <motion.div className="d-block d-md-flex menu-food-item"
                        variants={menuHoverVariants}
                        whileHover="hoverMenu"
                    >
                        <div className="text order-1 mb-3">
                            <Image width={100} height={100} src="/image/img_2.jpg" alt="Free Website Template for Restaurants by Free-Template.co" />
                            <h3><a href="#">Nasi uduk Diet Komplit (SANTAN FREE) free Tempe Orek</a></h3>
                            <p>Membuat nasi uduk dirice cooker seperti memasak nasi seperti biasa tetapi ditambah bumbu dan Santan Pelengkapnya hanya Tempe orek basah Dan telur Dadar 😊</p>
                        </div>
                        <div className="price order-2">
                            <strong>Rp15.000</strong>
                        </div>
                    </motion.div>

                    <motion.div className="d-block d-md-flex menu-food-item"
                        variants={menuHoverVariants}
                        whileHover="hoverMenu"
                    >
                        <div className="text order-1 mb-3">
                            <Image width={100} height={100} src="/image/img_3.jpg" alt="Free Website Template for Restaurants by Free-Template.co" />
                            <h3><a href="#">AYAM BETUTU WITH NASI GORENG BALI free TERI KACANG</a></h3>
                            <p>Pengen makan ayam yang pedes, tapi pedesnya juga berempah, akhirnya cus lah bikin ayam betutu ala ala nasi goreng🤭.</p>
                        </div>
                        <div className="price order-2">
                            <strong>Rp15.000</strong>
                        </div>
                    </motion.div>

                    <motion.div className="d-block d-md-flex menu-food-item"
                        variants={menuHoverVariants}
                        whileHover="hoverMenu"
                    >
                        <div className="text order-1 mb-3">
                            <Image width={100} height={100} src="/image/img_1.jpg" alt="Free Website Template for Restaurants by Free-Template.co" />
                            <h3><a href="#">Lontong Sayur &amp; FREE Half Balado Egg</a></h3>
                            <p>Nikmati kelezatan sarapan khas dengan sepiring Lontong Sayur, yang menggabungkan lontong, telur setengah matang, dan kentang yang sempurna.</p>
                        </div>
                        <div className="price order-2">
                            <strong>Rp20.000</strong>
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
                            <h3><a href="#">Healthy Korean Corn Dog + FREE Tteokbokki</a></h3>
                            <p>Rasakan sensasi berbeda di antara corn dogs yang biasa Anda nikmati dengan corn dogs ala Korea. Rahasia utama di balik perbedaan keduanya tersemat pada keunikan adonan yang menggoda selera.</p>
                        </div>
                        <div className="price order-2">
                            <strong>Rp12.500</strong>
                        </div>
                    </div>

                    <div className="d-block d-md-flex menu-food-item">
                        <div className="text order-1 mb-3">
                            <Image width={100} height={100} src="/image/img_1.jpg" alt="Free Website Template for Restaurants by Free-Template.co" />
                            <h3><a href="#">Cheese Buldak Chicken with Korean Rice n Bean + FREE Odeng and Sweet Potato</a></h3>
                            <p>Ayam yang terlilit keju, tapi disini tidak hanya dililit tapi juga ditabur keju yang berlimpah.</p>
                        </div>
                        <div className="price order-2">
                            <strong>Rp30.000</strong>
                        </div>
                    </div>

                    <div className="d-block d-md-flex menu-food-item">
                        <div className="text order-1 mb-3">
                            <Image width={100} height={100} src="/image/img_3.jpg" alt="Free Website Template for Restaurants by Free-Template.co" />
                            <h3><a href="#">Korean Chicken Bao &amp; FREE Salad</a></h3>
                            <p>Kelezatan Korean Chicken Bao Buns yang disajikan dengan Smashed Cucumber Salad dari Petaluma Poultry, sehingga terdapat kombinasi cita rasa yang terlupakan 📛💝.</p>
                        </div>
                        <div className="price order-2">
                            <strong>Rp25000</strong>
                        </div>
                    </div>

                    <div className="d-block d-md-flex menu-food-item">
                        <div className="text order-1 mb-3">
                            <Image width={100} height={100} src="/image/img_2.jpg" alt="Free Website Template for Restaurants by Free-Template.co" />
                            <h3><a href="#">Bread with Chicken Bolognaise &amp; FREE Sweet Potato Fries</a></h3>
                            <p>Chips ubi si pencuri perhatian sebagai pada pai bolognaise lezat. Ramah di kantong, dan menciptakan makan siang penuh kenyamanan yang tak tertandingi.</p>
                        </div>
                        <div className="price order-2">
                            <strong>Rp23.000</strong>
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

export default RegulerMenu;