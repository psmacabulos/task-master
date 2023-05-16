import './InputField.css';

interface Props {
  todo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InputField = ({ todo, setToDo, onSubmit }: Props) => {
  return (
    <form className='input' onSubmit={onSubmit}>
      <input
        type='text'
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
