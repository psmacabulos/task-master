import { useRef } from 'react';
import './InputField.css';

interface Props {
  todo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InputField = ({ todo, setToDo, onSubmit }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className='input'
      onSubmit={(e) => {
        onSubmit(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type='text'
        autoFocus
        placeholder='Add a task'
        className='input__box'
        value={todo}
        onChange={(e) => setToDo(e.target.value)}
      />
      <button type='submit' className='input__submit'>
        Add
      </button>
    </form>
  );
};

export default InputField;
