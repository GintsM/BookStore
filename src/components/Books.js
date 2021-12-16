import { useSelector } from 'react-redux';
import AddBooks from './form';
import Book from './book';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  const toLoop = Object.keys(books[books.length - 1]);
  const open = books[books.length - 1];
  return (
    <div>
      {toLoop.map((key) => (
        <Book
          id={key}
          key={key}
          title={open[key][0].title}
          category={open[key][0].category}
        />
      ))}
      <AddBooks />
    </div>
  );
};

export default Books;
