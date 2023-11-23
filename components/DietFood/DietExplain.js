import Image from "next/image";

const DietExplain = () => {
    return (
        <>
            <div class="section pb-3 bg-white" id="reguler-food" data-aos="fade-up">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-md-12 col-lg-8 section-heading">
                            <h2 class="heading mb-5">Diet Food</h2>
                            <p>Solusi untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan mudah, murah, dan menyenangkan.</p>
                            <p>Sudah disetujui oleh Dokter Gizi terbaik di Indonesia dan sudah dibuktikan oleh ratusan ribu konsumen kami yang berhasil.</p>
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

export default DietExplain;