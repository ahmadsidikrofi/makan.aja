import React, { useEffect, useState } from 'react'
import Jumbotron from "@/components/Jumbotron";
import { Quicksand } from 'next/font/google'
import CarouselPrice from './CarouselPrice';
import MenuHeader from './MenuHeader';

const quicksand = Quicksand({ subsets: ['latin'] })


export default function PriceList() {
    return (
        <>
            <MenuHeader />
            <Jumbotron />
            <CarouselPrice />
            <div className='container mt-5'>
                <div className="row mb-4">
                    <h1 className="text-center p-3 bg-danger shadow-lg rounded-4 text-white">
                        One Loss : LUNCH / DINNER PACKAGE
                    </h1>
                    <div className="col-md-5 text-center mt-md-5">
                        <h2>WEEKLY</h2>
                        <p>5 Days</p>
                        <hr className="my-4" style={{ borderWidth: 3 }} />
                        <h2>Lunch / Dinner</h2>
                        <p>IDR 357.000</p>
                    </div>
                    <div className="col-md-2 mt-5 d-none d-md-block">
                        <hr className="vertical-hr" style={{ transform: "rotate(90deg)", marginTop: 100, borderWidth: 3 }} />
                    </div>
                    <div className="col-md-5 text-center mt-md-5">
                        <h2>MONTHLY</h2>
                        <p>20 DAYS</p>
                        <hr className="my-4" style={{ borderWidth: 3 }} />
                        <h2>Lunch / Dinner</h2>
                        <s className="text-danger">
                            <span className="text-primary">IDR 1.417.500</span>
                        </s>
                        <p>IDR 1.250.000</p>
                    </div>
                </div>
                <div className="row mb-4">
                    <h1 className="text-center p-3 bg-danger shadow-lg rounded-4 text-white">
                        Second Loss : LUNCH & DINNER PACKAGE
                    </h1>
                    <div className="col-md-5 text-center mt-5">
                        <h2>WEEKLY</h2>
                        <p>5 Days</p>
                        <hr className="my-4" style={{ borderWidth: 3 }} />
                        <h2>Lunch / Dinner</h2>
                        <p>IDR 609.000</p>
                    </div>
                    <div className="col-md-2 mt-5 d-none d-md-block">
                        <hr className="vertical-hr" style={{ transform: "rotate(90deg)", marginTop: 100, borderWidth: 3 }} />
                    </div>
                    <div className="col-md-5 text-center mt-5">
                        <h2>MONTHLY</h2>
                        <p>20 DAYS</p>
                        <hr className="my-4" style={{ borderWidth: 3 }} />
                        <h2>Lunch / Dinner</h2>
                        <s className="text-danger">
                            <span className="text-primary">IDR 2.362.500</span>
                        </s>
                        <p>IDR 2.162.500</p>
                    </div>
                </div>
                <div className="row mb-4">
                    <h1 className="text-center p-3 bg-danger shadow-lg rounded-4 text-white">PROMO PACKAGE</h1>
                    {/* Add the rest of your promo package details here */}
                </div>

            </div>
        </>
    )
}
