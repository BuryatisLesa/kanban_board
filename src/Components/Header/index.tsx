import styles from "./style.module.css"
import userAvatar from "./media/user-avatar.png";
import { JSX } from "react";

type TypeHeaderProps = {
    title: string
}

function Header({title}: TypeHeaderProps): JSX.Element{
    return (
        <header className={styles["header"]}>
            <h1 className={styles["header__title"]}>{title}</h1>
            <div className={styles["header__user-menu"]}>
                <div className={styles["header__container-avatar"]}>
                <img src={userAvatar} alt="" className={styles["header__user-menu-avatar"]} />
                </div>
                <button className={styles["header__open-menu"]}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2_9)">
                    <path d="M7.415 8.20999L12 12.795L16.585 8.20999L18 9.62499L12 15.625L6 9.62499L7.415 8.20999Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_2_9">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                </defs>
                </svg>
                </button>
            </div>
        </header>
    ) 
}


export default Header