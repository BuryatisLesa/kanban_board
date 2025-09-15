import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="layout">
      <Header title="Awesome Kanban Board" />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
