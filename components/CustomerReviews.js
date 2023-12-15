import Image from "next/image";
import CustomerOwlCarousel from "./CustomerOwlCarousel";

const CustomerReviews = () => {
    return (
        <>
            <div className="section" data-aos="fade-up" id="other-services" style={{ background: "#5BD2BC" }}>
                <div className="container mx-auto">
                    <div className="row section-heading justify-content-center mb-5">
                        <div className="col-md-12 text-center">
                            <h2 className="heading mb-3">Customer Reviews</h2>
                        </div>
                    </div>
                    <div style={{ textAlign: "center"  }} className="row justify-content-center">
                        <div className="col-8 col-sm-12 col-md-8 col-lg-8">
                            <CustomerOwlCarousel />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerReviews;