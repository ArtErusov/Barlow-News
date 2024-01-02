/* eslint-disable react/prop-types */
import HeaderSearch from './HeaderSearch';
import styles from './styles.module.css';
import React from 'react';

// eslint-disable-next-line react/prop-types
const HeaderBottom = (props) => {

const [activeIndex, setActiveIndex] = React.useState(0)
   

return<React.Fragment>
    <div className={styles.bottom + ' ' + styles.container}>
        <div className={styles.bottom__selector}>
        {props.newsCategories.map((item, index) =>
            <p key={index} onClick={() => setActiveIndex(index)} className = { activeIndex === index ? styles.bottom__selector_active : styles.bottom__selector_p}>{item}</p>
        )}
        </div>    
    <HeaderSearch />
    </div>
    <div className={styles.bottom__divider}></div>  
</React.Fragment>
};

export default HeaderBottom;