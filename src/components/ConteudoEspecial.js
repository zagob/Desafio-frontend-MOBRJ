import styles from '../styles/components/ConteudoEspecial.module.css';

export function ConteudoEspecial() {
    return (
        <div className={styles.Container}>
            <div className={styles.Content}>
                <div className={styles.Title}>
                    <h1>Conteúdos especiais</h1>
                </div>

                <div className={styles.ContentCard}>
                    <div className={styles.Card}>
                        <div className={styles.Title1}>
                            <h2>Dicas de carreira</h2>
                        </div>
                        <div className={styles.Title2}>
                            <div>
                                <p>Nome</p>
                                <p>Sobrenome</p>
                            </div>
                            <button>Saiba Mais</button>
                        </div>
                    </div>

                    <div className={styles.Card2}>
                        <div className={styles.Title1}>
                            <h2>Do mil ao <span>milhão</span></h2>
                        </div>
                        <div className={styles.Title2}>
                            <div>
                                <p>Nome</p>
                                <p>Sobrenome</p>
                            </div>
                            <button>Saiba Mais</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}