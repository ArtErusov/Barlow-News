/* eslint-disable react/prop-types */
import styles from './styles.module.css';
import React from 'react';
import Selector from './components/selector/Selector';
import NewsFeedTitle from './components/newsFeedTitle/NewsFeedTitle';


const NewsFeed = (props) => {  
    return<React.Fragment>
        
        <div className={styles.container}>
            <NewsFeedTitle/>
            <Selector newsCategories={props.newsCategories}/>  
        </div> 
    </React.Fragment>
};

export default NewsFeed;