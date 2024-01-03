/* eslint-disable react/prop-types */
import styles from './styles.module.css';
import React from 'react';



const NewsFeed = (props) => {
    const [activeIndex, setActiveIndex] = React.useState(0)
   

    return<React.Fragment>
        <div className={styles.container}>
            <div className={styles.selector}>
            {props.newsCategories.map((item, index) =>
                <p key={index} onClick={() => setActiveIndex(index)} className = { activeIndex === index ? styles.selector_active : styles.selector_p}>{item}</p>
            )}
            </div>    
        </div> 
    </React.Fragment>
};

export default NewsFeed;