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
  const [stateInput, setStateInput] = useState(false);

  const currentIndex = stageOrder.indexOf(title);
  const prevStage = currentIndex > 0 ? stageOrder[currentIndex - 1] : null;

  const handleAddCard = (taskId?: string) => {
    setStateInput(false);

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
    } else if (prevStage && taskId) {
      let movedTask: Issue | null = null;

      setStages((prev) =>
        prev.map((stage) => {
          if (stage.title === prevStage) {
            const filtered = stage.issues.filter((i) => {
              if (i.id === taskId) {
                movedTask = i;
                return false;
              }
              return true;
            });
            return { ...stage, issues: filtered };
          }
          if (stage.title === title && movedTask) {
            return { ...stage, issues: [...stage.issues, movedTask] };
          }
          return stage;
        })
      );
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

      {!stateInput ? (
        <div className={styles.stage__containerButton}>
          <button
            id={styles.stage__addButton}
            onClick={() => setStateInput(true)}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 6H8V1C8 0.448 7.552 0 7 0C6.448 0 6 0.448 6 1V6H1C0.448 6 0 6.448 0 7C0 7.552 0.448 8 1 8H6V13C6 13.552 6.448 14 7 14C7.552 14 8 13.552 8 13V8H13C13.552 8 14 7.552 14 7C14 6.448 13.552 6 13 6Z"
                fill="#5E6C84"
              />
            </svg>
            Add card
          </button>
        </div>
      ) : title === "Backlog" ? (
        <div>
          <div className={styles.input_task}>
            <input
              type="text"
              value={newTaskName}
              onChange={(e) => setNewTaskName(e.target.value)}
            />
          </div>
          <button id={styles.stage__submit} onClick={() => handleAddCard()}>
            Submit
          </button>
        </div>
      ) : (
        prevStage && (
          <div className={styles.stage__select}>
            <select
              defaultValue=""
              onChange={(e) => handleAddCard(e.target.value)}
            >
              <option value=""></option>
              {stages
                .find((s) => s.title === prevStage)
                ?.issues.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
            </select>
          </div>
        )
      )}
    </div>
  );
}

export default Stage;
