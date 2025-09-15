import styles from './style.module.css'

function Footer(){
    return (
        <footer className={styles["footer"]}>
            <div className={styles["footer__container-tasks"]}>
                <span className={styles["footer__active-tasks"]}>Active tasks:</span>
                <span className={styles["footer__finished-tasks"]}>Finished tasks:</span>
            </div>
            <div className={styles["footer__name-board"]}>Kanban board by</div>
        </footer>
    )
}

export default Footer;