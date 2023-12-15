import styles from "@/styles/Auth.module.css";
import Image from "next/image";

const Login = () => {
    return (
        <>
            <div className={`${styles.main} container `}>
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <div className={styles.wrapper}>
                            <div className={styles["card-switch"]}>
                                <label className={styles.switch}>
                                    <input className={styles.toggle} type="checkbox" />
                                    <span className={styles.slider}></span>
                                    <span className={styles["card-side"]}></span>
                                    <div className={styles["flip-card__inner"]}>
                                        <div className={styles["flip-card__front"]} style={{ width: 400 }}>
                                            <div className={styles.title} style={{ fontSize: 35 }}>Masuk dulu <br /> dan mulai makan</div>
                                            <form action="" className={styles["flip-card__form"]}>
                                                <input
                                                    type="email"
                                                    placeholder="Email"
                                                    name="email"
                                                    className={styles["flip-card__input"]}
                                                />
                                                <input
                                                    type="password"
                                                    placeholder="Password"
                                                    name="password"
                                                    className={styles["flip-card__input"]}
                                                />
                                                <button className={styles["flip-card__btn"]}>Let`s go!</button>
                                            </form>
                                        </div>
                                        <div  className={styles["flip-card__back"]} style={{ marginLeft: -80 }}>
                                            <div className={styles.title} style={{ fontSize: 35 }}>Daftarkan dirimu lalu mulai makan</div>
                                            <form action="" style={{ height: 300 }} className={styles["flip-card__form"]}>
                                                <input
                                                    type="name"
                                                    placeholder="Name"
                                                    className={styles["flip-card__input"]}
                                                />
                                                <input
                                                    type="email"
                                                    placeholder="Email"
                                                    name="email"
                                                    className={styles["flip-card__input"]}
                                                />
                                                <input
                                                    type="password"
                                                    placeholder="Password"
                                                    name="password"
                                                    className={styles["flip-card__input"]}
                                                />
                                                <button className={styles["flip-card__btn"]}>Confirm!</button>
                                            </form>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 auth-bg">
                        <Image src={"/image/slider-2.png"} width={1000} height={680} alt="bebas"/>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Login;
