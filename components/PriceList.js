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
                    <h1 className='text-center p-3 bg-danger shadow-lg rounded-4 text-white'>PROMO PACKAGE</h1>
                    <div className="col-md-5 text-center mt-5">
                        <h2>PAKET 2 BULAN</h2>
                        <p>40 Days</p>
                        <div>
                            <hr className="my-4" style={{ borderWidth: 3, width: "13cm" }} />
                            <div className='card bg-warning rounded-4 p-3 shadow-lg'>
                                <h2 className='text-white'>Lunch / Dinner</h2>
                                <s className='text-danger'>
                                    <span className='text-primary'>IDR 7.087.500</span>
                                </s>
                                <p>IDR 2.500.000</p>
                                <p style={{ fontSize: 13 }} className='p-2 bg-success text-white rounded-3 w-50 mx-auto'>+ Gratis 1 Minggu Lunch / Dinner</p>
                            </div>
                        </div>
                        <hr className="my-4" style={{ borderWidth: 3 }} />
                        <div className='card bg-warning rounded-4 p-3 shadow-lg'> 
                            <div className='mt-4'>
                                <h2 className='text-white'>LUNCH & DINNER</h2>
                                <s className='text-danger'>
                                    <span className='text-primary'>IDR 7.087.500</span>
                                </s>
                                <p>IDR 4.275.500</p>
                                <p style={{ fontSize: 13 }} className='p-2 bg-success text-white rounded-3 w-50 mx-auto'>+ Gratis 1 Minggu Lunch & Dinner</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 mt-5 d-none d-md-block">
                        <hr className="vertical-hr mt-5 w-100" style={{ transform: "rotate(90deg)", borderWidth: 3 }} />
                    </div>
                    <div className="col-md-5 text-center mt-5">
                        <h2>PAKET 3 BULAN</h2>
                        <p>60 DAYS</p>
                        <hr className="my-4" style={{ borderWidth: 3 }} />
                        <div className='card bg-warning rounded-4 p-3 shadow-lg'>
                            <h2 className='text-white'>Lunch / Dinner</h2>
                            <s className='text-danger'>
                                <span className='text-primary'>IDR 4.252.500</span>
                            </s>
                            <p>IDR 3.750.000</p>
                            <p style={{ fontSize: 13 }} className='p-2 bg-success text-white rounded-3 w-50 mx-auto'>+ Gratis 2 Minggu Lunch / Dinner</p>
                        </div>
                        <hr className="my-4" style={{ borderWidth: 3 }} />
                        <div className='card bg-warning rounded-4 p-3 shadow-lg'>
                            <h2 className='text-white'>LUNCH & DINNER</h2>
                            <s className='text-danger'>
                                <span className='text-primary'>IDR 7.087.500</span>
                            </s>
                            <p>IDR 6.387.500</p>
                            <p style={{ fontSize: 13 }} className='p-2 bg-success text-white rounded-3 w-50 mx-auto'>+ Gratis 2 Minggu Lunch & Dinner</p>
                        </div>
                    </div>
                </div>
                <div className='row my-5 w-75 mx-auto'>
                    <div className="card bg-danger shadow-lg rounded-5 p-3 text-center ">
                        <h3 className='p-3 bg-warning text-danger fw-semibold w-50 rounded-5 mx-auto '>BONUS ON IN</h3>
                        <p className={`${quicksand.className} fs-2 my-3 fw-bold text-warning `}>WEEKEND MEAL</p>
                        <p className={`${quicksand.className} fs-4 text-white fw-normal`}>(PRICE PER MEAL)</p>
                        <p className={`${quicksand.className} fs-4 text-white`}>IDR 55.000</p>
                        <hr style={{ color: "#fff", borderWidth: 3 }} className='w-50 mx-auto'/>
                        <p className={`${quicksand.className} fs-2 my-3 fw-bold text-warning `}>MOOLES FIBER DRINK</p>
                        <p className={`${quicksand.className} fs-4 text-white fw-normal`}>(PRICE PER BOX 5 SACHET)</p>
                        <p className={`${quicksand.className} fs-4 text-white`}>IDR 75.000</p>
                        <hr style={{ color: "#fff", borderWidth: 3 }} className='w-50 mx-auto'/>
                        <p className={`${quicksand.className} fs-4 fw-bold text-white `}>Dengan mengajak teman</p>
                        <p className={`${quicksand.className} fs-2 fw-bold text-warning `}>BISA DISKON IDR 75.000</p>
                        <p className={`${quicksand.className} fs-2 fw-bold text-white`}>+ GRATIS ONGKIR</p>
                        <p className={`${quicksand.className}  fw-bold text-dark `}>alamat pengiriman harus sama</p>
                    </div>
                </div>
            </div>
        </>
    )
}
