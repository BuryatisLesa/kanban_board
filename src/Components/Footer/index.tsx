import { StageType } from "../../type";
import styles from "./style.module.css";

type FooterProps = {
  stages: StageType[];
  boardName: string;
};

function Footer({ stages, boardName }: FooterProps) {
  const backlog = stages.find((s) => s.title === "Backlog");
  const finished = stages.find((s) => s.title === "Finished");
  const year = new Date().getFullYear();

  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__container-tasks"]}>
        <span className={styles["footer__active-tasks"]}>
          Active tasks: {backlog ? backlog.issues.length : 0}
        </span>
        <span className={styles["footer__finished-tasks"]}>
          Finished tasks: {finished ? finished.issues.length : 0}
        </span>
      </div>
      <div className={styles["footer__name-board"]}>
        {boardName} © {year}
      </div>
    </footer>
  );
}

export default Footer;
