import styles from '../styles/components/Recomendado.module.css'

export function Recomendados() {
    return (
        <div className={styles.Content1}>
                <div className={styles.ContentTitle}>
                    <h2>Recomendados</h2>
                    <div className={styles.Icons}>
                        <h4> Em alta: </h4><img src="assets/emalta.svg" alt="Em Alta"/>
                        <p> Videos</p><img src="assets/iconCam.svg" alt="Videos" />
                        <p>Artigos</p><img src="assets/iconPod.svg" alt="Podcast"/>
                        <p>Podcasts</p><img src="assets/iconLiv.svg" alt="Artigos"/>
                        <p>Trilhas</p><img src="assets/iconRock.svg" alt="Trilhas"/>
                    </div>
                </div>

                <div className={styles.ContainerCard}>
                    <div className={styles.Card}>
                        <div className={styles.ImagemCard}>
                            <div className={styles.a}>
                                
                            </div>
                            <div className={styles.b}>
                                <img src="#" alt=""/>
                                <img src="assets/info.svg" alt=""/>
                            </div>
                        </div>
                        <h4>Lorem ipsum dolor sit amet, const...</h4>
                        <p>Produtos <img src="assets/time.svg" alt=""/> + 4 min</p>
                    </div>
                    <div className={styles.Card}>
                        <div className={styles.ImagemCard2}>
                            <div className={styles.a}></div>
                            <div className={styles.b}>
                                <img src="assets/est.svg" alt=""/>
                                <img src="assets/info.svg" alt=""/>
                            </div>
                        </div>
                        <h4>Sed nonnumy magna aliquam...</h4>
                        <p>Produtos <img src="assets/time.svg" alt=""/> + 8 min</p>
                    </div>
                    <div className={styles.Card}>
                        <div className={styles.ImagemCard3}>
                            
                        </div>
                        <h4>Lorem ipsum dolor sit amet, const...</h4>
                        <p>Estratégia e Modelo de Negócios</p>
                    </div>
                    <div className={styles.Card}>
                        <section>
                            <div className={styles.ImagemCard4}>
                                <div className={styles.a}>
                                    
                                </div>
                                <div className={styles.b}>
                                    <img src="#" alt=""/>
                                    <img src="assets/cam.svg" alt=""/>
                                </div>
                            </div>
                            <h4>Lorem ipsum dolor sit amet, const...</h4>
                            <p>Ferramentas e Sistemas</p>
                        </section>
                    </div>

                    <div className={styles.Card}>
                        <section>
                            <div className={styles.ImagemCard5}>
                                <div className={styles.a}>
                                    
                                </div>
                                <div className={styles.b}>
                                    <img src="#" alt=""/>
                                    <img src="assets/info.svg" alt=""/>
                                </div>
                            </div>
                            <h4>Lorem ipsum dolor sit amet, const...</h4>
                            <p>Tecnologia da Informação <img src="assets/time.svg" alt=""/> + 5 min</p>
                        </section>
                    </div>
                    <div className={styles.Card}>
                        <section>
                            <div className={styles.ImagemCard6}>
                                <div className={styles.a}>
                                    
                                </div>
                                <div className={styles.b}>
                                    <img src="#" alt=""/>
                                    <img src="assets/infor.svg" alt=""/>
                                </div>
                            </div>
                            <h4>Lorem ipsum dolor sit amet, const...</h4>
                            <p>Recursos Humanos</p>
                        </section>
                    </div>
                    <div className={styles.Card}>
                        <section>
                            <div className={styles.ImagemCard7}>
                                <div className={styles.a}>
                                    
                                </div>
                                <div className={styles.b}>
                                    <img src="assets/est.svg" alt=""/>
                                    <img src="assets/slides.svg" alt=""/>
                                </div>
                            </div>
                            <h4>Lorem ipsum dolor sit amet, const...</h4>
                            <p>Treinamentos</p>
                        </section>
                    </div>
                    <div className={styles.Card}>
                        <section>
                        <div className={styles.ImagemCard8}>
                            <div className={styles.a}>
                                
                            </div>
                            <div className={styles.b}>
                                <img src="#" alt=""/>
                                <img src="assets/cam.svg" alt=""/>
                            </div>
                        </div>
                        <h4>Lorem ipsum dolor sit amet, const...</h4>
                        <p>Compliance  <img src="assets/time.svg" alt=""/> + 3 min</p>
                        </section>
                    </div>
                    <h2 className={styles.VerMais}>Ver mais</h2>
                </div>

            </div>
    )
}