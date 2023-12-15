import Image from "next/image";

const DietExplain = () => {
    return (
        <>
            <div className="section pb-3" id="reguler-food" data-aos="fade-up" style={{ background: "#F8493D", }}>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-12 col-lg-8 section-heading">
                            <h2 className="text-white mb-5">Diet Food</h2>
                            <p className="text-white">Solusi untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan mudah, murah, dan menyenangkan.</p>
                            <p className="text-white">Sudah disetujui oleh Dokter Gizi terbaik di Indonesia dan sudah dibuktikan oleh ratusan ribu konsumen kami yang berhasil.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="section pt-2 pb-2 text-center" data-aos="fade" style={{ background: "#F8493D", }}>
                <p><Image src="/image/bg_hero.png" width={1450} height={1280} alt="bgHero" className="img-fluid" /></p>
            </div>
        </>
    );
}

export default DietExplain;