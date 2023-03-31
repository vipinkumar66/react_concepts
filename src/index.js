import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const books =[
  {
    title : "Dog Man",
    author : "Dav Pilkey" ,
    img : "./assets/dogman.jpg"
  },

  {
    title : "Outlive",
    author : "Peter Attia MD" ,
    img : "./assets/outlive.jpg"
  },

  {
    title : "How to Catch the Easter Bunny",
    author : "Adam Wallace" ,
    img : "./assets/bunny.jpg"
  }
]

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return(
          <article className='book'>
            <img src={book.img} alt={book.title}/>
            <h2>{book.title}</h2>
            <h2>{book.author}</h2>
          </article>
        )
      })};
    </section>
   )
}


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList/>);

