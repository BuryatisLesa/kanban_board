import styles from './style.module.css'

type TaskItem = {
  id: string;
  name: string;
  description: string;
};


function Task({ name }: TaskItem) {
  return <a className={styles["task"]}>{name}</a>;
}

export default Task;
