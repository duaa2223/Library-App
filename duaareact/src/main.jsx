
// import './index.css'
// import InitState from './books'
// function Main() {
//   return (
//     <div>
//     <InitState/>
//     </div>
//   );
// }

// export default Main
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import InitState from './books';

// function Main() {
//   return (
//     <div>
//       {InitState.books.map(book => (
//         <div key={book.id} className="book-card">
//           <h2>{book.title}</h2>
//           <p>Author: {book.author}</p>
//           <p>ISBN: {book.isbn}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Main;



