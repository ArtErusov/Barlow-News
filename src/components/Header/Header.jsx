import { formatDate } from './components/FormatDate';
import styles from './styles.module.css';
import Logotipe from '../../assets/css/svg/Logotipe';
import React from 'react';

const Header = () => {
    return (<React.Fragment>
        <header className={styles.header + ' ' + styles.container}>
            <div className={styles.header__left}>
                <p>{formatDate(new Date())}</p>
                <p>city and weather</p>
            </div>
           <div className={styles.header__logo}>
                <Logotipe />
            </div>
           <div className={styles.header__right}>
                <a href="">finances</a>
                <a href="">info</a>
            </div>
        </header>
    <div className={styles.separator}></div>    
    </React.Fragment>);
}

export default Header;