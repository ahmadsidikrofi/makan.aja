import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const CarouselImg = () => {
    return ( 
        <>
            <div className="container mx-auto my-5 ">
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner rounded-5">
                        <div className="carousel-item active ">
                            <Image src="https://source.unsplash.com/random/1000x400/?food" width={1000} height={400} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item active">
                            <Image src="https://source.unsplash.com/random/1000x400/?fruit" width={1000} height={400} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item active">
                            <Image src="https://source.unsplash.com/random/1000x400/?food" width={1000} height={400} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    );
}
 
export default CarouselImg;