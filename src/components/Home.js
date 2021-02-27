import styles from '../styles/components/Home.module.css';
import { ConteudoEspecial } from './ConteudoEspecial';
import { MenuMobile } from './MenuMobile';
import { NovasIdeias } from './NovasIdeias';
import { Recomendados } from './Recomendados';
import { VocePodeGostar } from './VocePodeGostar';


export function Home() {
    return (
        <div className={styles.Container}>
            <div className={styles.Recomentation}>
                <div className={styles.top}>
                    <div className={styles.search}>
                        <img src="assets/Search.svg" alt=""/>
                        <input placeholder="pesquisar" type="search" />
                        <img src="assets/filtro.svg" alt=""/>
                    </div>
                    <div className={styles.perfil}>
                        <img src="assets/duvida.svg" />
                        <img src="assets/sino.svg" />
                        <img src="https://github.com/zagob.png" width="32" />
                    </div>
                </div>

                <div className={styles.TituloBotao}>
                    <div className={styles.title}>
                        <h1><span>Lorem</span> ipsum dolor sit amet, consectetuer adipiscing.</h1>

                        <p>
                            Lorem ipsum dolar sit ammet, consectetur adipisit elit.
                            Pellentesque eu suspedel el sed vulpulate et leo
                            tinicidunt
                        </p>
                    </div>
                    <div className={styles.button}>
                        <button>Ver Mais</button>
                    </div>
                </div>
            </div>

            <Recomendados />
            <ConteudoEspecial />
            <VocePodeGostar title="Você também pode gostar de:" />
            <NovasIdeias />
            <VocePodeGostar title="Veja também: " />
            <MenuMobile />
        </div>
    )
}