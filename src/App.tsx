import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';

function App() {
  return (
    <div className="layout">
      <Header title="Awesome Kanban Board" />
      <Main />
    </div>
  );
}

export default App;
