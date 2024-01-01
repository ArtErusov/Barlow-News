import styles from './styles.module.css';

const NewBanner = () => {
    return(
        <div className={styles.header}>
           {/* <h3 className={styles.title}>{props.item.title}</h3> */}
           <p className={styles.date}></p>
        </div>
    )
}

export default NewBanner;