import Image from "next/image";

const RegulerExplain = () => {
    return (
        <>
            <div class="section pb-3 bg-white" id="reguler-food" data-aos="fade-up">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-md-12 col-lg-8 section-heading">
                            <h2 class="heading mb-5">Reguler Food</h2>
                            <p>Program Food and Beverage Product merupakan program pelatihan bagi kandidat yang memiliki ketertarikan pada pengolahan dan penyajian makanan dan minuman.</p>
                            <p>Pelatihan ini bertujuan meningkatkan kemampuan dan pengetahuan akan penanganan makanan secara benar, dimulai dari penanganan bahan baku sampai nanti.</p>
                        </div>
                    </div>
                </div>
            </div> 


            <div class="section bg-white pt-2 pb-2 text-center" data-aos="fade">
                <p><Image src="/image/bg_hero.png" width={1450} height={1280} alt="bgHero" class="img-fluid" /></p>
            </div>
        </>
    );
}

export default RegulerExplain;