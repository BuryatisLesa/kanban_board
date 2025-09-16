import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Issue, StageType } from "../../type";
import styles from "./style.module.css";

type TaskPageProps = {
  stages: StageType[];
};

const LS_KEY = "kanban_stages";

function TaskPage({ stages }: TaskPageProps) {
  const { id } = useParams<{ id: string }>();
  const [task, setTask] = useState<Issue | null>(null);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const found = stages.flatMap((s) => s.issues).find((t) => t.id === id);
    if (found) {
      setTask(found);
      setDescription(found.description);
    }
  }, [id, stages]);

  const handleSave = () => {
    if (!task) return;

    const updatedStages = stages.map((stage) => ({
      ...stage,
      issues: stage.issues.map((i) =>
        i.id === task.id ? { ...i, description } : i
      ),
    }));

    localStorage.setItem(LS_KEY, JSON.stringify(updatedStages));
    alert("Описание сохранено!");
  };

  if (!task) {
    return <div className={styles.taskPage}>Задача не найдена</div>;
  }

  return (
    <div className={styles.taskPage}>
      <h1 className={styles.taskPage__title}>{task.name}</h1>

      <textarea
        className={styles.taskPage__textarea}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className={styles.taskPage__button} onClick={handleSave}>
        💾 Сохранить
      </button>

      <Link to="/" className={styles.taskPage__back}>
        ← Назад к доске
      </Link>
    </div>
  );
}

export default TaskPage;
