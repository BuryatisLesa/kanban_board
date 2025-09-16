import styles from "./style.module.css"
import userAvatar from "./media/user-avatar.png";
import { JSX, useState } from "react";

type TypeHeaderProps = {
  title: string
}

function Header({ title }: TypeHeaderProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles["header"]}>
      <h1 className={styles["header__title"]}>{title}</h1>
      <div className={styles["header__user-menu"]}>
        <div className={styles["header__container-avatar"]}>
          <img
            src={userAvatar}
            alt="User avatar"
            className={styles["header__user-menu-avatar"]}
          />
        </div>
        <button
          className={styles["header__open-menu"]}
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Стрелка зависит от состояния */}
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"
                fill="white"
              />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                fill="white"
              />
            </svg>
          )}
        </button>

        {/* Выпадающее меню */}
        {isOpen && (
          <ul className={styles["header__dropdown"]}>
            <li className={styles["header__dropdown-item"]}>Profile</li>
            <li className={styles["header__dropdown-item"]}>Log Out</li>
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;
