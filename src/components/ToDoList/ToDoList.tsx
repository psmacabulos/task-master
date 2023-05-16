import { Todo } from '../../todo';
import './ToDoList.css';

interface Props {
  todo: Todo[];
  setToDo: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const ToDoList = ({ todo, setTodo }: Props) => {
  return (
    <ul className='list'>
      {todo != null && todo.map((todo) => <li key={todo.id}>{todo.toDo}</li>)}
    </ul>
  );
};

export default ToDoList;
