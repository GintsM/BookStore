const AddBooks = () => (
  <form>
    <input placeholder="ADD NEW BOOK" />
    <select name="books" id="book">
      <option value="Action">Volvo</option>
      <option value="Science fiction">The God&apos;s Equation</option>
      <option value="Economy">Dollars</option>
      <option value="Computer Science">DS n ALgo</option>
    </select>
    <input type="button" value="Add Book" />
  </form>
);

export default AddBooks;
