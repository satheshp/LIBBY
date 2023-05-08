import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";


const Categories= () => {
  const [books, setBooks] = useState([]);
  const [selectedOption, setSelectedOption] = useState('title');

  useEffect(() => {
    axios.get('https://6444cbf3b80f57f581ab5240.mockapi.io/library')
      .then(response => setBooks(response.data))
      .catch(error => console.log(error));
  }, []);

  const distinctTitles = [...new Set(books.map(book => book.title))];
  const distinctAuthors = [...new Set(books.map(book => book.author))];
  const distinctSubjects = [...new Set(books.map(book => book.subject))];
  const distinctYears = [...new Set(books.map(book => book.publish_date.split('-')[0]))];

  let totalCount = 0;
  let options = [];
  switch (selectedOption) {
    case 'title':
      totalCount = distinctTitles.length;
      options = distinctTitles.map(title => (
        <tr key={title}>
          <td>{title}</td>
          <td>{books.filter(book => book.title === title).length}</td>
        </tr>
      ));
      break;
    case 'author':
      totalCount = distinctAuthors.length;
      options = distinctAuthors.map(author => (
        <tr key={author}>
          <td>{author}</td>
          <td>{books.filter(book => book.author === author).length}</td>
        </tr>
      ));
      break;
    case 'subject':
      totalCount = distinctSubjects.length;
      options = distinctSubjects.map(subject => (
        <tr key={subject}>
          <td>{subject}</td>
          <td>{books.filter(book => book.subject === subject).length}</td>
        </tr>
      ));
      break;
    case 'publishYear':
      totalCount = distinctYears.length;
      options = distinctYears.map(year => (
        <tr key={year}>
          <td>{year}</td>
          <td>{books.filter(book => book.publish_date.split('-')[0] === year).length}</td>
        </tr>
      ));
      break;
    default:
      break;
  }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      
      <div>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">My Libby</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
          <li className="nav-item" id="well">
          <Link to="/" className="bolt" id="ginger"> Home </Link>
          </li>
          
          <li className="nav-item" id="well">
          <Link to="/Repository" className="bolt" id="ginger"> Repository</Link>
          </li>
          <li className="nav-item" id="well">
          <Link to="/Admin" className="bolt" id="ginger"> Admin Login </Link>
          </li>
        </ul>
        
        
      </div>
    </div>
  </nav>
  <br></br>
        <label htmlFor="criteria-select">Choose criteria:</label>
        <select id="criteria-select" value={selectedOption} onChange={handleOptionChange}>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="subject">Subject</option>
          <option value="publishYear">Publish Year</option>
        </select>
        <br></br>
      </div>
      <h4>Total Count: {totalCount}</h4>
      <br></br>
      <table className='table'>
        <thead>
          <tr>
            <th>{selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1)}</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {options}
        </tbody>
      </table>
    </div>
  );
};

export default Categories;