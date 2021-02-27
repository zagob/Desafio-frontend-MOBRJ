import styles from '../styles/components/MenuMobile.module.css'

export function MenuMobile() {
    return (
        <div className={styles.Container}>
            <div className={styles.Content}>
                <div className={styles.inicio}>
                    <img src="assets/house.svg" alt=""/>
                    <p>Inicio</p>
                </div>
                <div>
                    <img src="assets/bookmark.svg" alt=""/>
                    <p>Minha Lista</p>
                </div>
                <div>
                    <img src="assets/cobrowsing-o.svg" alt=""/>
                    <p>Navegar</p>
                </div>
                <div>
                    <img src="assets/card.svg" alt=""/>
                    <p>Categorias</p>
                </div>
                <div>
                    <img src="assets/school.svg" alt=""/>
                    <p>Materiais</p>
                </div>
            </div>
        </div>
    )
}