import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { addBook } from '../redux/books/books';

// function fetchBooks() {
//   return fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HjsHtEgPSdcmM341lPRI/books');
// }

// const getBooks = () => (dispatch) => fetchBooks()
//   .then((book) => dispatch(displayBooks(book)));

const AddBooks = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState('');
  const [categorie, setCategorie] = useState('');

  const OnChangeHandle = (e) => {
    setState(e.target.value);
  };
  const onChangecategorie = (e) => {
    setCategorie(e.target.value);
  };
  const submitBookToStore = () => {
    const newBook = {
      id: uuidv4(),
      title: state,
      category: categorie,
    };

    const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HjsHtEgPSdcmM341lPRI/books';

    const postBook = async (url, data) => {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response;
    };

    const getBooks = () => (dispatch) => postBook(url, newBook)
      .then((b) => dispatch(addBook(b)));

    dispatch(getBooks());
  };

  return (
    <form>
      <input value={state} onChange={OnChangeHandle} placeholder="ADD NEW BOOK" />
      <select name="books" id="book" onChange={onChangecategorie}>
        <option value="Science fiction">The God&apos;s Equation</option>
        <option value="Action">Volvo</option>
        <option value="Economy">Dollars</option>
        <option value="Computer Science">DS n ALgo</option>
      </select>
      <input type="button" value="Add Book" onClick={submitBookToStore} />
    </form>
  );
};

export default AddBooks;
