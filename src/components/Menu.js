import styles from '../styles/components/Menu.module.css';

export function Menu() {
    return (
        <div className={styles.Container}>
            <div className={styles.Logo}>
                <img src="assets/nextlogo.svg" alt=""/>
            </div>
            <div className={styles.Links}>
                <div className={styles.Inicio}>
                    <h2>Início</h2>
                    <a>Minha Lista</a>
                </div>
                <div>
                    <h2>Navegar</h2>
                    <a>Treinamentos</a>
                    <a>Trilhas</a>
                    <a>Podcasts</a>
                </div>
                <div>
                    <h2>Categorias</h2>
                    <a>Ferramentas e Sistemas</a>
                    <a>Gestão Estratégica</a>
                    <a>Produtos</a>
                </div>
                <div>
                    <h2>Material de Apoio</h2>
                    <a>Ferramentas</a>
                    <a>Anotações</a>
                </div>
            </div>
        </div>
    )
}