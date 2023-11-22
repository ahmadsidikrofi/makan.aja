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
                </div>
            </div>
        </>
    )
}

export default CustomerReviews;