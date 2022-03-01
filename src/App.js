import AddTodo from './components/AddTodo';
import './App.css';
import TodoTable from './components/TodoTable';


function App() {
  return (
    <div className="bgs">
      <div className='todoapp'>
          TODO APP
      </div>
      <div className='code'>
      </div>
      <TodoTable
        
      ></TodoTable>
      <AddTodo></AddTodo>
    </div>
  );
}

export default App;
