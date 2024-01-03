/* eslint-disable react/prop-types */
import styles from './styles.module.css';
import patch from '../../../../../../assets/img/patch.png';

// { item }

const NewsItem = () => {
//Заглушка в дальнейшем img будем получать из файлов
const imgOne = false;


return(
    <div className={styles.wrapper}>
        {imgOne ? <img src={imgOne} alt="news"/> : <img src={patch} alt="news"/>}
        {/* {item.image ? <img src={item.image} alt="news"/> : <img src={patch} alt="news"/>} */}
        <p className={styles.title}>Encoding Binary Events from Continuous Time Series in Rooted Trees using Contrastive Learning</p>

    </div>


    )  
};

export default NewsItem;