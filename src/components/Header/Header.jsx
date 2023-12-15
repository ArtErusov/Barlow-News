import { formatDate } from './components/FormatDate';
import styles from './styles.module.css';
import Logotipe from '../../assets/css/svg/Logotipe';
import HeaderBottom from './HeaderBottom';
import React from 'react';

const Header = () => {
    return (<React.Fragment>
        <header className={styles.header}>
            <div className={styles.header__left}>
                <p>{formatDate(new Date())}</p>
                <p>city ​​and weather</p>
            </div>
           <Logotipe />
           <div className={styles.header__right}>
                {/* <Link to=''>info</Link> */}
                <a href="">info</a>
            </div>
        </header>
        <HeaderBottom />
    </React.Fragment>);
}

export default Header;