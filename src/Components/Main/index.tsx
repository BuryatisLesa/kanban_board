import { Routes, Route } from "react-router-dom";
import Stage from "../Stage";
import TaskPage from "../TaskPage";
import { StageType } from "../../type";
import styles from "./style.module.css";

type MainProps = {
  stages: StageType[];
  setStages: React.Dispatch<React.SetStateAction<StageType[]>>;
};

function Main({ stages, setStages }: MainProps) {
  return (
    <main className={styles.main}>
      <Routes>
        {/* Доска */}
        <Route
          path="/"
          element={
            <>
              {stages.map((stage) => (
                <Stage
                  key={stage.title}
                  title={stage.title}
                  issues={stage.issues}
                  setStages={setStages}
                  stages={stages}
                />
              ))}
            </>
          }
        />
        {/* Страница задачи */}
        <Route path="/tasks/:id" element={<TaskPage stages={stages} />} />
      </Routes>
    </main>
  );
}

export default Main;
