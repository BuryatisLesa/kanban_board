import styles from "./style.module.css";
import Stage from "../Stage";
import { useState, useEffect } from "react";
import { StageType } from "../../type";

const dataMock: StageType[] = [
  {
    title: "Backlog",
    issues: [
      { id: "1", name: "Sprint bugfix", description: "Fix all the bugs" },
      { id: "2", name: "Login page", description: "Optimize performance" },
    ],
  },
  {
    title: "Ready",
    issues: [
      { id: "3", name: "User profile page", description: "Implement layout" },
    ],
  },
  { title: "In Progress", issues: [] },
  { title: "Finished", issues: [] },
];


const LS_KEY = "kanban_stages";

function Main() {
    const [stages, setStages] = useState<StageType[]>(() => {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) {
        try {
        return JSON.parse(raw) as StageType[];
        } catch {
        console.error("Ошибка при чтении localStorage");
        }
    }
    return dataMock;
    });

    useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(stages));
    }, [stages]);

    return (
        <main className={styles["main"]}>
        {stages.map((stage) => (
            <Stage
            key={stage.title}
            title={stage.title}
            issues={stage.issues}
            setStages={setStages}
            stages={stages}
            />
        ))}
        </main>
  );
}

export default Main;
