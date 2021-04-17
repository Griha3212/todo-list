import './App.css';
import { ToDoList } from '../src/components/ToDoList/ToDoList';
import { Header } from '../src/components/Header/Header'

function App() {
  return (
    <div className="App">

      <Header />
      <ToDoList />

    </div>
  );
}

export default App;
