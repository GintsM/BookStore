import { useDispatch } from 'react-redux';
import { removeBookFromApi } from '../redux/books/books';

const Button = (props) => {
  const dispatch = useDispatch();
  const id = props;
  return (
    <button type="button" onClick={() => dispatch(removeBookFromApi(id.id))} id={id.id}>
      Remove Book
    </button>
  );
};

export default Button;
