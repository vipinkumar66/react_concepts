import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const firstBook = {
  title : "Dog Man",
  author : "Dav Pilkey" ,
  img : "./assets/dogman.jpg"
}

const secondBook = {
  title : "Outlive",
  author : "Peter Attia MD" ,
  img : "./assets/outlive.jpg"
}

const thirdBook = {
  title : "How to Catch the Easter Bunny",
  author : "Adam Wallace" ,
  img : "./assets/bunny.jpg"
}

const BookList = () => {
  return (
    <section className='booklist'>
        <Book title = {firstBook.title}
         author = {firstBook.author}
         img = {firstBook.img}>
          <button>Click me</button>
         </Book>

        <Book title = {secondBook.title}
         author = {secondBook.author}
         img = {secondBook.img}/>

        <Book title = {thirdBook.title}
         author = {thirdBook.author}
         img = {thirdBook.img}/>
    </section>
  )
}


const Book = (props) =>{
  const {title, author, img, children} = props
    return(
        <article className='book'>
            <img src={img} alt={title}/>
            <h2>{title}</h2>
            <h2>{author}</h2>
            {children}{/*  here the children is a special prop */}
        </article>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList/>);

