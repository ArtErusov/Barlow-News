import styles from './styles.module.css';
import IconArrow from '../../../../assets/css/svg/IconArrow';
import MainImg1 from '../../../../assets/img/mainNews/mainNewsImg1.png';


const MainNews = () => {
    return(
        <div className={styles.container}>
            <div className={styles.news}>
                <p className={styles.news__title}>At the Chicago Architecture Biennial, Artists Run Free</p>
                <button className={styles.news__btn}>
                    <IconArrow/>
                </button>
            </div>
            <p className={styles.date}>17 : 24 Friday, December 15, 2023</p>
            <img className={styles.img} src={MainImg1} alt="" />
        </div>
    )
};

export default MainNews;