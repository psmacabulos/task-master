import { Todo } from '../../model/todo';
import { ToDoItem } from '../ToDoItem';
import './ToDoList.css';

interface Props {
  list: Todo[];
  setList: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const ToDoList = ({ list, setList }: Props) => {
  return (
    <div className='container'>
      <ul className='list'>
        <span className='list__heading'>Remaining Tasks:</span>
        {list != null &&
          list.map((item) => (
            <ToDoItem key={item.id} item={item} list={list} setList={setList} />
          ))}
      </ul>

      <ul className='list remove'>
        <span className='list__heading'>Finished Tasks:</span>
        {list != null &&
          list.map((item) => (
            <ToDoItem key={item.id} item={item} list={list} setList={setList} />
          ))}
      </ul>
    </div>
  );
};

export default ToDoList;
