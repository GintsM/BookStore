import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { addBookToApi } from '../redux/books/books';

const AddBooks = () => {
  const [value, setValue] = useState('');
  const [categoryValue, setCategory] = useState('');

  const dispatch = useDispatch();

  const submitBookToStore = (event) => {
    event.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title: value,
      category: categoryValue,
    };

    dispatch(addBookToApi(newBook));
    setValue('');
    setCategory('');
  };
  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };
  const valueHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <form onSubmit={submitBookToStore}>
      <input value={value} onChange={valueHandler} placeholder="ADD NEW BOOK" required />
      <select name="books" id="book" value={categoryValue} onChange={categoryHandler} required>
        <option value="">Select</option>
        <option value="Action">Action</option>
        <option value="Science fiction">Science fiction</option>
        <option value="Economy">Economy</option>
        <option value="Computer Science">Computer Science</option>
      </select>
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default AddBooks;
