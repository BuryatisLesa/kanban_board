import { Issue, StageType } from "../../type";
import { useState } from "react";
import styles from "./style.module.css";
import Task from "../Task";

type StageProps = {
  title: string;
  issues: Issue[];
  setStages: React.Dispatch<React.SetStateAction<StageType[]>>;
  stages: StageType[];
};

const stageOrder = ["Backlog", "Ready", "In Progress", "Finished"];

function Stage({ title, issues, setStages, stages }: StageProps) {
  const [newTaskName, setNewTaskName] = useState("");
  const [selectedTaskId, setSelectedTaskId] = useState("");

  const currentIndex = stageOrder.indexOf(title);
  const prevStage = currentIndex > 0 ? stageOrder[currentIndex - 1] : null;

  const handleAddCard = () => {
    if (title === "Backlog") {
      if (!newTaskName.trim()) return;

      const newTask: Issue = {
        id: Date.now().toString(),
        name: newTaskName,
        description: `Task from ${title}`,
      };

      setStages((prev) =>
        prev.map((stage) =>
          stage.title === title
            ? { ...stage, issues: [...stage.issues, newTask] }
            : stage
        )
      );
      setNewTaskName("");
    } else if (prevStage && selectedTaskId) {
      // перемещаем задачу из предыдущей стадии
      let movedTask: Issue | null = null;

      setStages((prev) =>
        prev.map((stage) => {
          if (stage.title === prevStage) {
            // вырезаем задачу из предыдущей
            const filtered = stage.issues.filter((i) => {
              if (i.id === selectedTaskId) {
                movedTask = i;
                return false;
              }
              return true;
            });
            return { ...stage, issues: filtered };
          }
          if (stage.title === title && movedTask) {
            // добавляем в текущую
            return { ...stage, issues: [...stage.issues, movedTask] };
          }
          return stage;
        })
      );
      setSelectedTaskId("");
    }
  };

  return (
    <div className={styles.stage}>
      <h2 className={styles.stage__title}>{title}</h2>
      <div className={styles.stage__tasks}>
        {issues.map((t) => (
          <Task key={t.id} {...t} />
        ))}
      </div>

      {title === "Backlog" ? (
        <div>
          <input
            type="text"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            placeholder="New task..."
          />
          <button onClick={handleAddCard}>Add Card</button>
        </div>
      ) : (
        prevStage && (
          <div>
            <select
              value={selectedTaskId}
              onChange={(e) => setSelectedTaskId(e.target.value)}
            >
              <option value="">Select task...</option>
              {stages
                .find((s) => s.title === prevStage)
                ?.issues.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
            </select>
            <button onClick={handleAddCard} disabled={!selectedTaskId}>
              Move
            </button>
          </div>
        )
      )}
    </div>
  );
}

export default Stage;
