import styles from './styles.module.css';
import React from 'react';
import IconArrow from '../../../../../../assets/css/svg/IconArrow'


const NewsFeedTitle = () => {

// eslint-disable-next-line no-constant-condition
let name = 0 == 0 ? 'world' : 'business'

    return<React.Fragment>
    <div className={styles.component}>    
        <h2 className={styles.title}>{name} news</h2>
        <button className={styles.icon}>
            <IconArrow/>
        </button>
    </div>
    </React.Fragment>
};

export default NewsFeedTitle;