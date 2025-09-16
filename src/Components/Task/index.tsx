import { Link } from "react-router-dom";
import { Issue } from "../../type";
import styles from "./style.module.css";

function Task({ id, name }: Issue) {
  return (
    <Link to={`/tasks/${id}`} className={styles.task}>
      {name}
    </Link>
  );
}

export default Task;