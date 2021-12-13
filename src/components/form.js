// import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
// import { addBook } from '../redux/books/books';

// const dispatch = () => useDispatch();

const submitBookToStore = (e) => {
  const newBook = {
    id: uuidv4(),
    title: e.target.previousElementSibling.previousElementSibling.value,
    author: '',
  };

  console.log(newBook);

  // dispatch an action and pass it the newBook object (your action's payload)
  // dispatch(addBook(newBook));
};

const AddBooks = () => (
  <form>
    <input placeholder="ADD NEW BOOK" />
    <select name="books" id="book">
      <option value="Action">Volvo</option>
      <option value="Science fiction">The God&apos;s Equation</option>
      <option value="Economy">Dollars</option>
      <option value="Computer Science">DS n ALgo</option>
    </select>
    <input type="button" value="Add Book" onClick={submitBookToStore} />
  </form>
);

export default AddBooks;
