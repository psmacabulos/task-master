import './ToDoItem.css';
import { Todo } from '../../model/todo';
import { AiFillEdit, AiFillDelete, AiOutlineFileDone } from 'react-icons/ai';
import { useState } from 'react';

interface Props {
  item: Todo;
  list: Todo[];
  setList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoItem = ({ item, list, setList }: Props) => {
  const handleDone = (id: number) => {
    setList(
      list.map((singleItem) =>
        singleItem.id == id
          ? { ...singleItem, isDone: !singleItem.isDone }
          : singleItem
      )
    );
  };

  const handleDelete = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  };

  // Create a new state that will be used to check if the item is being edited.
  const [isEditing, setIsEditing] = useState(false);

  // Create a separate state variable to store the edited value of the to-do item:
  const [editedToDo, setEditedToDo] = useState(item.toDo);

  // Add an event handler function to handle the edit button click:
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Create an event handler function to handle the changes in the input field:
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedToDo(event.target.value);
  };

  // Implement an event handler function to handle the submission of the edited to-do item:
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setList(
      list.map((singleItem) =>
        singleItem.id === item.id
          ? { ...singleItem, toDo: editedToDo }
          : singleItem
      )
    );

    setIsEditing(false);
  };

  return (
    <form className='item' onSubmit={handleSubmit}>
      {isEditing ? (
        <input
          type='text'
          value={editedToDo}
          onChange={handleInputChange}
          autoFocus
        />
      ) : item.isDone ? (
        <s className='item__text'>{item.toDo}</s>
      ) : (
        <span className='item__text'>{item.toDo}</span>
      )}

      <div className='icons'>
        <span>
          <AiFillEdit onClick={() => handleEdit()} />
        </span>
        <span>
          <AiFillDelete onClick={() => handleDelete(item.id)} />
        </span>
        <span>
          <AiOutlineFileDone onClick={() => handleDone(item.id)} />
        </span>
      </div>
    </form>
  );
};

export default ToDoItem;
