import Image from "next/image";
import styles from "@/styles/Carousel.module.css"
var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import { useEffect } from "react";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false })

const CustomerOwlCarousel = () => {
    const Responsive = {
        0: {
            items: 1.5,
            margin: 5
        },
        768: {
            items: 2.5,
            margin: 10
        },
        1024: {
            items: 3.5,
            margin: 20
        }
    }
    const options = {
        loop: true,
        items: 1,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
        }
    };
    return (
        <>
            <OwlCarousel {...options}>
                <div className={styles.items}>
                    <p>&ldquo;Empanada adalah roti isi atau pastri panggang atau goreng di banyak negara di Amerika Latin, Eropa Selatan, dan bagian dari Asia Tenggara.&rdquo;</p>
                    <div className={styles.author}>
                        <Image src="/image/person_2.jpg" className="mb-3" style={{ borderRadius: '50%', width: 80, height: 80, margin: '0 auto' }} width={100} height={100} alt="Image placeholder" />
                        <h4>Ataya Tidur</h4>
                        <p>CEO, Founder</p>
                    </div>
                </div>
                <div className={styles.items}>
                    <p>&ldquo;Empanada adalah roti isi atau pastri panggang atau goreng di banyak negara di Amerika Latin, Eropa Selatan, dan bagian dari Asia Tenggara.&rdquo;</p>
                    <div className={styles.author}>
                        <Image src="/image/person_2.jpg" className="mb-3" style={{ borderRadius: '50%', width: 80, height: 80, margin: '0 auto' }} width={100} height={100} alt="Image placeholder" />
                        <h4>Maura Ngantuk</h4>
                        <p>CEO, Founder</p>
                    </div>
                </div>
                <div className={styles.items}>
                    <p>&ldquo;Empanada adalah roti isi atau pastri panggang atau goreng di banyak negara di Amerika Latin, Eropa Selatan, dan bagian dari Asia Tenggara.&rdquo;</p>
                    <div className={styles.author}>
                        <Image src="/image/person_2.jpg" className="mb-3" style={{ borderRadius: '50%', width: 80, height: 80, margin: '0 auto' }} width={100} height={100} alt="Image placeholder" />
                        <h4>Ataya Tidur</h4>
                        <p>CEO, Founder</p>
                    </div>
                </div>
                <div className={styles.items}>
                    <p>&ldquo;Empanada adalah roti isi atau pastri panggang atau goreng di banyak negara di Amerika Latin, Eropa Selatan, dan bagian dari Asia Tenggara.&rdquo;</p>
                    <div className={styles.author}>
                        <Image src="/image/person_2.jpg" className="mb-3" style={{ borderRadius: '50%', width: 80, height: 80, margin: '0 auto' }} width={100} height={100} alt="Image placeholder" />
                        <h4>Maura Ngantuk</h4>
                        <p>CEO, Founder</p>
                    </div>
                </div>
                <div className={styles.items}>
                    <p>&ldquo;Empanada adalah roti isi atau pastri panggang atau goreng di banyak negara di Amerika Latin, Eropa Selatan, dan bagian dari Asia Tenggara.&rdquo;</p>
                    <div className={styles.author}>
                        <Image src="/image/person_2.jpg" className="mb-3" style={{ borderRadius: '50%', width: 80, height: 80, margin: '0 auto' }} width={100} height={100} alt="Image placeholder" />
                        <h4>Ataya Tidur</h4>
                        <p>CEO, Founder</p>
                    </div>
                </div>
            </OwlCarousel>
        </>
    );
}

export default CustomerOwlCarousel;