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
    const options = {
        loop: true,
        items: 1,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                margin: 5
            },
            768: {
                items: 2,
                margin: 10
            },
            1024: {
                items: 3,
                margin: 20
            }
        }
    };
    return (
        <>
            <OwlCarousel options={options}>
                <div className={styles.items}>
                    <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                    <div className={styles.author}>
                        <Image src="/image/person_2.jpg" className="mb-3" style={{ borderRadius: '50%', width: 80, height: 80, margin: '0 auto' }} width={100} height={100} alt="Image placeholder" />
                        <h4>Geert Green</h4>
                        <p>CEO, Founder</p>
                    </div>
                </div>
                <div className={styles.items}>
                    <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                    <div className={styles.author}>
                        <Image src="/image/person_2.jpg" className="mb-3" style={{ borderRadius: '50%', width: 80, height: 80, margin: '0 auto' }} width={100} height={100} alt="Image placeholder" />
                        <h4>Geert Green</h4>
                        <p>CEO, Founder</p>
                    </div>
                </div>
                <div className={styles.items}>
                    <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                    <div className={styles.author}>
                        <Image src="/image/person_2.jpg" className="mb-3" style={{ borderRadius: '50%', width: 80, height: 80, margin: '0 auto' }} width={100} height={100} alt="Image placeholder" />
                        <h4>Geert Green</h4>
                        <p>CEO, Founder</p>
                    </div>
                </div>
                <div className={styles.items}>
                    <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                    <div className={styles.author}>
                        <Image src="/image/person_2.jpg" className="mb-3" style={{ borderRadius: '50%', width: 80, height: 80, margin: '0 auto' }} width={100} height={100} alt="Image placeholder" />
                        <h4>Geert Green</h4>
                        <p>CEO, Founder</p>
                    </div>
                </div>
                <div className={styles.items}>
                    <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                    <div className={styles.author}>
                        <Image src="/image/person_2.jpg" className="mb-3" style={{ borderRadius: '50%', width: 80, height: 80, margin: '0 auto' }} width={100} height={100} alt="Image placeholder" />
                        <h4>Geert Green</h4>
                        <p>CEO, Founder</p>
                    </div>
                </div>
                {/* <div className={styles.items}>
                                <h1>2</h1>
                            </div>
                            <div className={styles.items}>
                                <h1>3</h1>
                            </div>
                            <div className={styles.items}>
                                <h1>4</h1>
                            </div>
                            <div className={styles.items}>
                                <h1>5</h1>
                            </div> */}
            </OwlCarousel>
        </>
    );
}

export default CustomerOwlCarousel;