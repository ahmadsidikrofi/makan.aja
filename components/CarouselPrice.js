import Image from 'next/image'
import React from 'react'

export default function CarouselPrice() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 col-lg-6 col-12 col-sm-12">
            <div className="container mx-auto my-5 ">
                <div id="carouselKiri" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselKiri" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselKiri" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselKiri" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner rounded-5">
                        <div className="carousel-item active ">
                            <Image src="https://source.unsplash.com/random/600x650/?food" width={600} height={650} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item active">
                            <Image src="https://source.unsplash.com/random/600x650/?fruit" width={600} height={650} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item active">
                            <Image src="https://source.unsplash.com/random/600x650/?food" width={600} height={650} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselKiri" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselKiri" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
        <div className="col-md-6 col-lg-6 col-12 col-sm-12">
            <div className="container mx-auto my-5 ">
                <div id="carouselKanan" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselKanan" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselKanan" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselKanan" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner rounded-5">
                        <div className="carousel-item active ">
                            <Image src="https://source.unsplash.com/random/600x650/?food" width={600} height={650} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item active">
                            <Image src="https://source.unsplash.com/random/600x650/?fruit" width={600} height={650} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item active">
                            <Image src="https://source.unsplash.com/random/600x650/?food" width={600} height={650} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselKanan" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselKanan" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
