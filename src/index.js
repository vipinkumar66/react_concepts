import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const BookList = () => {
  return (
    <section className='booklist'>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
    </section>
  )
}

const Book = () =>{
    return(
        <article className='book'>
            <Image/>
            <Title/>
            <Author/>
        </article>
    )
}

const Image = () => <img src='https://images-na.ssl-images-amazon.com/images/I/81fyoFoaxlL._AC_UL600_SR600,400_.jpg'alt='Dog Man'/>
const Title = () => {
    return(
        <h2>Dog Man</h2>
    )
}
const Author = () => <h3>Dav Pilkey</h3>


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList/>);

