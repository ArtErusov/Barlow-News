import HeaderSearch from './HeaderSearch';
import styles from './styles.module.css';
import React from 'react';

const HeaderBottom = () => {

const [activeIndex, setActiveIndex] = React.useState(0)

const newsCategories = ["all", "business", "technology", "regionall"]    

    return(
       <div className={styles.bottom}>
        <div className={styles.bottom__selector}>
            {newsCategories.map((item, indexItem) =>
                <p key={indexItem} onClick={() => setActiveIndex(indexItem)} className = { activeIndex === indexItem ? styles.bottom__selector_active : styles.bottom__selector_p}>{item}</p>
            )}
        </div>    
            <HeaderSearch />
       </div>
    )
}

export default HeaderBottom;