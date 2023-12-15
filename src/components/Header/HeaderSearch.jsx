import styles from './styles.module.css';

const HeaderSearch = () => {
    return(
    <form className={styles.search}> 
        <input className={styles.search__input} type="text" name="text" placeholder="Search here!" />
        
    </form>
    )
};

export default HeaderSearch;