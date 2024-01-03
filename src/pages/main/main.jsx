import Separator from '../../components/UI/separator/Separator';
import MainNews from './components/mainNews/mainNews';
import React from 'react';
import NewsFeed from './components/newsFeed/newsFeed';

const Main = (props) => {
    return(
    <React.Fragment>
        <MainNews/>
        <Separator/>
{/* eslint-disable-next-line react/prop-types */}
        <NewsFeed newsCategories={props.newsCategories}/>
    </React.Fragment>
    )
}; 

export default Main;