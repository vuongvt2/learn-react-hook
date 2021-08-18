import { useState } from 'react';
import './App.scss';
import ColorBox from './component/ColorBox';
import TodoList from './component/TodoList';

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'Learn react hooks!' },
    { id: 2, title: 'I love front end!' },
    { id: 3, title: 'Welcome to Vuong!' },
  ]);

  function handleTodoClick(todo) {
    console.log(todo);
    // const index = todoList.findIndex(x => x.id === todo.id);
    // if (index < 0) return;
    // const newTodoList = [...todoList];
    // newTodoList.splice(index, 1);
    const newTodoList = todoList.filter(item => item.id !== todo.id);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <h1> React Hooks - TodoList</h1>
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
      <ColorBox />
    </div>
  );
}

export default App;
