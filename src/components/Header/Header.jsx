import { formatDate } from './components/FormatDate';
import styles from './styles.module.css';

const Header = () => {
    return(
        <header className={styles.header}>
           <h1>Barlow-news</h1>
           <p>{formatDate(new Date())}</p>
        </header>
    )
}

export default Header;