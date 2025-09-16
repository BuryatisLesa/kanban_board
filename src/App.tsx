import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { StageType } from "./type";

const dataMock: StageType[] = [
  { title: "Backlog", issues: [] },
  { title: "Ready", issues: [] },
  { title: "In Progress", issues: [] },
  { title: "Finished", issues: [] },
];

const LS_KEY = "kanban_stages";

function App() {
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

  const boardName = "Awesome Kanban Board";

  return (
    <BrowserRouter>
      <div className="layout">
        <Header title={boardName} />
        <Main stages={stages} setStages={setStages} />
        <Footer stages={stages} boardName={boardName} />
      </div>
    </BrowserRouter>
  );
}

export default App;
