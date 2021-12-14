import { useSelector } from 'react-redux';
import Form from './form';
import Book from './book';

const Books = () => {
  const numCakes = useSelector((state) => state.booksReducer);
  return (
    <div>
      {numCakes.map((task) => (
        <Book
          key={task.id}
          title={task.title}
        />
      ))}
      <Form />
    </div>
  );
};

export default Books;
