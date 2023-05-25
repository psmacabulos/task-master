import { useState } from 'react';
import './App.css';
import { InputField } from './components/InputField';
import { Todo } from './model/todo';
import { ToDoList } from './components/ToDoList';

const App: React.FC = () => {
  const [todo, setToDo] = useState<string>('');
  const [toDoList, setToDoList] = useState<Todo[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo) {
      setToDoList([...toDoList, { id: Date.now(), toDo: todo, isDone: false }]);
      setToDo('');
    }
  };
  return (
    <div className='App'>
      <span className='heading'>Task Master</span>
      <InputField todo={todo} setToDo={setToDo} onSubmit={handleSubmit} />
      <ToDoList list={toDoList} setList={setToDoList} />
    </div>
  );
};

export default App;
