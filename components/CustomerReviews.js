import Image from "next/image";
import CustomerOwlCarousel from "./CustomerOwlCarousel";

const CustomerReviews = () => {
    return (
        <>
            <div className="section bg-white" data-aos="fade-up" id="other-services">
                <div className="container mx-auto">
                    <div className="row section-heading justify-content-center mb-5">
                        <div className="col-md-8 text-center">
                            <h2 className="heading mb-3">Customer Reviews</h2>
                        </div>
                    </div>
                    <div style={{ textAlign: "center"  }} className="row">
                        <div className="col-md-12">
                            <CustomerOwlCarousel />
                        </div>
                    </div>
                    {/* <div className="row justify-content-center text-center" data-aos="fade-up">
                        <div className="col-md-8">
                            <div className="owl-carousel home-slider-loop-false">
                                <div className="item">
                                    <blockquote className="testimonial">
                                        <p>&ldquo;A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.&rdquo;</p>
                                        <div className="author">
                                            <Image src="/image/person_1.jpg" width={100} height={100} alt="Image placeholder" className="mb-3" />
                                                <h4>Maxim Smith</h4>
                                                <p>CEO, Founder</p>
                                        </div>
                                    </blockquote>
                                </div>
                                <div className="item">
                                    <blockquote className="testimonial">
                                        <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
                                        <div className="author">
                                            <Image src="/image/person_2.jpg" width={100} height={100} alt="Image placeholder" className="mb-3" />
                                                <h4>Geert Green</h4>
                                                <p>CEO, Founder</p>
                                        </div>
                                    </blockquote>
                                </div>
                                <div className="item">
                                    <blockquote className="testimonial">
                                        <p>&ldquo;Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.&rdquo;</p>
                                        <div className="author">
                                            <Image src="/image/person_3.jpg" width={100} height={100} alt="Image placeholder" className="mb-3" />
                                                <h4>Dennis Roman</h4>
                                                <p>CEO, Founder</p>
                                        </div>
                                    </blockquote>
                                </div>
                                <div className="item">
                                    <blockquote className="testimonial">
                                        <p>&ldquo;The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.&rdquo;</p>
                                        <div className="author">
                                            <Image src="/image/person_2.jpg" width={100} height={100} alt="Image placeholder" className="mb-3" />
                                                <h4>Geert Green</h4>
                                                <p>CEO, Founder</p>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default CustomerReviews;