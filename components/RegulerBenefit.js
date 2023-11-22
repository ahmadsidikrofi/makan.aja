import { Icon } from '@iconify/react';

const RegulerBenefit = () => {
    return (
        <>
            <div className="section bg-white services-section" data-aos="fade-up">
                <div className="container">
                    <div className="row section-heading justify-content-center mb-5">
                        <div className="col-md-8 text-center">
                            <h2 className="heading mb-3">Other Services</h2>
                            {/* <p className="sub-heading mb-5">Free Website Template For Restaurants Made by <a href="#">Free-Template.co</a></p> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-m mb-5d-6 col-lg-4" data-aos="fade-up">
                            <div className="media feature-icon d-block text-center">
                                <div className="icon">
                                    <span className="flaticon-soup"><Icon icon="tabler:soup" /></span>
                                </div>
                                <div className="media-body">
                                    <h3>Quality Cuisine</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="100">
                            <div className="media feature-icon d-block text-center">
                                <div className="icon">
                                    <span className="flaticon-vegetables"><Icon icon="twemoji:green-salad" /></span>
                                </div>
                                <div className="media-body">
                                    <h3>Fresh Food</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="300">
                            <div className="media feature-icon d-block text-center">
                                <div className="icon">
                                    <span className="flaticon-pancake"><Icon icon="noto:pancakes" /></span>
                                </div>
                                <div className="media-body">
                                    <h3>Bread &amp; Pancake</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="500">
                            <div className="media feature-icon d-block text-center">
                                <div className="icon">
                                    <span className="flaticon-tray"><Icon icon="eos-icons:service-outlined" /></span>
                                </div>
                                <div className="media-body">
                                    <h3>Reserve Now</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="300">
                            <div className="media feature-icon d-block text-center">
                                <div className="icon">
                                    <span className="flaticon-salad"><Icon icon="twemoji:green-salad" /></span>
                                </div>
                                <div className="media-body">
                                    <h3>Fresh Vegies Salad</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="500">
                            <div className="media feature-icon d-block text-center">
                                <div className="icon">
                                    <span className="flaticon-chicken"><Icon icon="openmoji:chicken" /></span>
                                </div>
                                <div className="media-body">
                                    <h3>Whole Chicken</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegulerBenefit;