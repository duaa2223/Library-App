
import InitState from './books';

function Main() {
  return (
    <div>
      {InitState.books.map(book => (
        <div key={book.id} className="book-card">
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>ISBN: {book.isbn}</p>
        </div>
      ))}
    </div>
  );
}

export default Main;
