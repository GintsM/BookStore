import PropTypes from 'prop-types';
import Button from './Button';

const Book = ({ title, whatever }) => (
  <div className="book">
    <div className="title">
      <article>
        <p>Action</p>
        <h2>{title}</h2>
        <p>{whatever}</p>
        <ul>
          <li>Comments</li>
          <li>
            <Button />
          </li>
          <li>Edit</li>
        </ul>
      </article>
    </div>
    <div className="current">
      <h3>Current Chapter</h3>
      <h3><b>Chapter 17</b></h3>
      <input type="button" value="Update Progress" />
    </div>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  whatever: PropTypes.string.isRequired,
};

export default Book;
