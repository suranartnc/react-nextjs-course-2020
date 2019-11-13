import React from 'react'

const books = [
  {
    id: 1,
    title: 'Learning React: Functional Web Development with React and Redux',
    url:
      'https://www.amazon.in/Learning-React-Functional-Development-Redux-ebook/dp/B071HB1526',
    image: 'https://images-eu.ssl-images-amazon.com/images/I/51Q43WRXJzL.jpg',
  },
  {
    id: 2,
    title: '',
    url:
      'https://www.amazon.com/React-Running-Building-Web-Applications/dp/1491931825',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/51uF3%2BLn7cL._SX380_BO1,204,203,200_.jpg',
  },
]

function BookList() {
  return (
    <ul>
      <li>
        <a href="https://www.amazon.in/Learning-React-Functional-Development-Redux-ebook/dp/B071HB1526">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/I/51Q43WRXJzL.jpg"
            width="200"
          />
        </a>
      </li>
      <li>
        <a href="https://www.amazon.com/React-Running-Building-Web-Applications/dp/1491931825">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/51uF3%2BLn7cL._SX380_BO1,204,203,200_.jpg"
            width="200"
          />
        </a>
      </li>
    </ul>
  )
}

export default function App() {
  return (
    <div>
      <h1>Book List</h1>
      <BookList />
    </div>
  )
}
