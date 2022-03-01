import AddTodo from './components/AddTodo';
import './App.css';
import TodoTable from './components/TodoTable';


const todos = {
  type:"Family",
  do: "Redmine",
  time: "3:30 pm",
  date: "23-2-2022",
  place: "Aris office"
}

function App() {
  return (
    <div>
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
