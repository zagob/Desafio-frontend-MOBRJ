import styles from '../styles/components/NovasIdeias.module.css';

export function NovasIdeias() {
    return (
        <div className={styles.Container}>
            <div className={styles.Content}>
                <h2>Ainda não encontrou o que assistir?</h2>
                <h1>Busque por suas categorias preferidas</h1>
                <section>
                    <div className={styles.options1}>
                        <a>Seguro Auto</a>
                        <a>Nossa Rede</a>
                        <a>Ferramentas e Sistemas</a>
                        <a>Auditoria Interna</a>
                    </div>
                    <div className={styles.options2}>
                        <a>ABA</a>
                        <a>Estratégia e Modelo de Negócios</a>
                        <a>Sinistros</a>
                        <a>Gestão Comercial</a>
                    </div>
                </section>

                <div className={styles.Busca}>
                    <div>
                        <img src="assets/Search.svg" alt=""/>
                        <input placeholder="Ou procure por novas ideias..." type="search" />
                    </div>
                    <button>Buscar</button>
                </div>
            </div>
        </div>
    )
}