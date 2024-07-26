import AppName from "./Components/AppName";
import AddToDo from "./Components/AddToDo";
import ToDoitem from "./Components/ToDoitem";
import "./App.css";

function App() {
  return (
    <center class="todo-container">
      <AppName/>
      <AddToDo/>
      <div class = 'item-container'>
      <ToDoitem/>
      </div>
    </center>
  );
}

export default App;
