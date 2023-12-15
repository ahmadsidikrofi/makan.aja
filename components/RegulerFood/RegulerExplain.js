import Image from "next/image";

const RegulerExplain = () => {
    return (
        <>
            <div className="section pb-3" id="reguler-food" data-aos="fade-up" style={{ background: "#ffbf25" }}>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-12 col-lg-8 section-heading">
                            <h2 className="heading mb-5">Reguler Food</h2>
                            <p >Program Food and Beverage Product merupakan program pelatihan bagi kandidat yang memiliki ketertarikan pada pengolahan dan penyajian makanan dan minuman.</p>
                            <p>Pelatihan ini bertujuan meningkatkan kemampuan dan pengetahuan akan penanganan makanan secara benar, dimulai dari penanganan bahan baku sampai nanti.</p>
                        </div>
                    </div>
                </div>
            </div> 


            <div className="section pt-2 pb-2 text-center" data-aos="fade" style={{ background: "#ffbf25" }}>
                <p><Image src="/image/bg_hero.png" width={1450} height={1280} alt="bgHero" className="img-fluid" /></p>
            </div>
        </>
    );
}

export default RegulerExplain;