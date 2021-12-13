import Button from './Button';

const Book = () => (
  <div className="book">
    <div className="title">
      <article>
        <p>Action</p>
        <h2>The Hunger Games</h2>
        <p>Author</p>
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

export default Book;
