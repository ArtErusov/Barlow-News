/* eslint-disable react/prop-types */
import styles from './styles.module.css';
import {useState, Fragment, useEffect} from 'react';
import Selector from './components/selector/Selector';
import NewsFeedTitle from './components/newsFeedTitle/NewsFeedTitle';
import NewsItem from './components/newsItem/NewsItem';
import { getNews} from '../../../../api/apiNews'


const NewsFeed = (props) => {  
//--элемент который позволяет получить данные с сервера связанные компоненты .evn apiNews.js
    const [news, setNews] = useState([]);
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await getNews();
                setNews(response.news);
            } catch (error) {
                console.log(error);
            }
        };
        fetchNews();
    }, []);
//----------------------------------------
console.log('ghbdtn')


    return<Fragment>       
        <div className={styles.container}>
            <NewsFeedTitle/>
            <Selector newsCategories={props.newsCategories}/>
            <NewsItem item = {news[0]}/>
        </div> 
    </Fragment>
};

export default NewsFeed;