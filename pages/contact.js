import Jumbotron from "@/components/Jumbotron";
import Image from "next/image";
import { Quicksand } from 'next/font/google'
const quicksand = Quicksand({ subsets: ['latin'] })

const Contact = () => {
    return ( 
        <>
            <Jumbotron />
            <div className="container mt-5">
                <div className="row">
                    <div className="col mb-5">
                        <Image className="rounded-5 mb-5" src={"/image/makan.jpg"} width={500} height={690} alt="Gambar makanan"/>
                        <Image className="rounded-5 mb-5" src={"/image/makan2.png"} width={500} height={690} alt="Gambar makanan"/>
                        <Image className="rounded-5" src={"/image/makan3.jpg"} width={500} height={690} alt="Gambar makanan"/>
                    </div>
                    <div className="col">
                        <div className={`text-center ${quicksand.className}`}>
                            <h1 className="fw-bold">BATCH 50</h1>
                            <p className="mt-4">18 December 2023 - 24 December 2023</p>
                            <p className={`p-3 bg-danger fw-bold rounded-5 text-white shadow-lg ${quicksand.className}`}>Monday, 18 December 2023</p>
                        </div>
                        <div className={`${quicksand.className} mx-3 mt-4`}>
                            <p className="fw-bold text-primary">Lunch:</p>
                            <p>Semur Ayam and Nasi Pandan + FREE Kering Kentang</p>
                            <p className="fw-bold text-primary">Dinner:</p>
                            <p>Cheesy Onion Meatloaf with Squid Ink Pasta + FREE Avocado Crackers Dip</p>
                        </div>

                        <div className="text-center mt-5">
                            <p className={`p-3 bg-danger fw-bold rounded-5 text-white shadow-lg ${quicksand.className}`}
                            >Tuesday, 19 December 2023</p>
                        </div>
                        <div className={`${quicksand.className} mx-3 mt-4`}>
                            <p className="fw-bold text-primary">Lunch:</p>
                            <p>Mango Chicken with Coriander Rice + FREE Tartar Crispy Baby Corn</p>
                            <p className="fw-bold text-primary">Dinner:</p>
                            <p>Ayam Panggang Padang with Shallot Red Rice + FREE Telur Dadar Padang</p>
                        </div>

                        <div className="text-center mt-5">
                            <p className={`p-3 bg-danger fw-bold rounded-5 text-white shadow-lg ${quicksand.className}`}
                            >Wednesday, 20 December 2023</p>
                        </div>
                        <div className={`${quicksand.className} mx-3 mt-4`}>
                            <p className="fw-bold text-primary">Lunch:</p>
                            <p>Healthy Lontong Cap Go Meh</p>
                            <p className="fw-bold text-primary">Dinner:</p>
                            <p>Chicken Nanban with Corn Rice + FREE Tofu Katsu</p>
                        </div>

                        <div className="text-center mt-5">
                            <p className={`p-3 bg-danger fw-bold rounded-5 text-white shadow-lg ${quicksand.className}`}
                            >Thursday, 21 December 2023</p>
                        </div>
                        <div className={`${quicksand.className} mx-3 mt-4`}>
                            <p className="fw-bold text-primary">Lunch:</p>
                            <p>Meatloaf Marinara Pasta + FREE Broccoli Bites</p>
                            <p className="fw-bold text-primary">Dinner:</p>
                            <p>Indian Chicken Curry with Roti Canai + FREE Corn Salsa Salad</p>
                        </div>
                        <div className="text-center mt-5">
                            <p className={`p-3 bg-danger fw-bold rounded-5 text-white shadow-lg ${quicksand.className}`}
                            >Friday, 22 December 2023</p>
                        </div>
                        <div className={`${quicksand.className} mx-3 mt-4`}>
                            <p className="fw-bold text-primary">Lunch:</p>
                            <p>Ikan Saus Nyonya with Nasi Goreng Kecombrang + FREE Tempe Balado</p>
                            <p className="fw-bold text-primary">Dinner:</p>
                            <p>Matcha Chicken Ramen + FREE Crispy Seaweed</p>
                        </div>

                        <div className="text-center mt-5">
                            <p className={`p-3 bg-danger fw-bold rounded-5 text-white shadow-lg ${quicksand.className}`}
                            >Saturday, 23 December 2023</p>
                        </div>
                        <div className={`${quicksand.className} mx-3 mt-4`}>
                            <p className="fw-bold text-primary">Lunch:</p>
                            <p>Ayam Rica Rica with Serundeng Rice + FREE Tahu Cabe Garam</p>
                            <p className="fw-bold text-primary">Dinner:</p>
                            <p>Meatloaf BBQ Sauce with Garlic Fettucine + FREE Mini Cheese Pizza</p>
                        </div>

                        <div className="text-center mt-5">
                            <p className={`p-3 bg-danger fw-bold rounded-5 text-white shadow-lg ${quicksand.className}`}
                            >Sunday, 24 December 2023</p>
                        </div>
                        <div className={`${quicksand.className} mx-3 mt-4`}>
                            <p className="fw-bold text-primary">Lunch:</p>
                            <p>Indonesian Tamarind Fish Soup with Coriander Rice + FREE Coriander Egg Omelette</p>
                            <p className="fw-bold text-primary">Dinner:</p>
                            <p>Truffle Mushroom Angel Hair Pasta + FREE Glazed Sweet Potato</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
 
export default Contact;