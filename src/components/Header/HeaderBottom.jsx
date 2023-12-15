import HeaderSearch from './HeaderSearch';
import styles from './styles.module.css';

const HeaderBottom = () => {
    return(
       <div className={styles.bottom}>
        <div className={styles.bottom__selector}>
            <p>all</p>
            <p>business</p>
            <p>technology</p>
            <p>regionall</p>
        </div>    
            <HeaderSearch />
       </div>
    )
}

export default HeaderBottom;