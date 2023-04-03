import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const books =[
  {
    title : "Dog Man",
    author : "Dav Pilkey" ,
    img : "./assets/dogman.jpg",
    id:1
  },

  {
    title : "Outlive",
    author : "Peter Attia MD" ,
    img : "./assets/outlive.jpg",
    id:2
  },

  {
    title : "How to Catch the Easter Bunny",
    author : "Adam Wallace" ,
    img : "./assets/bunny.jpg",
    id:3
  }
]

const BookList = () => {
  const [searchItems, setSearchItems] = useState([])
  const handleSearch = (inputValue) =>{
    const filteredResult = books.filter((book) =>
    book.title.toLowerCase().includes(inputValue.toLowerCase()));
    setSearchItems(filteredResult)
    console.log(searchItems)
  }
  return (
    <div>
      <FormComponent handleSearch = {handleSearch}/>

      <section className='booklist'>
        {books.map((book) => {
          return(
            <article className='book' key={book.id}>
              <img src={book.img} alt={book.title}/>
              <h2>{book.title}</h2>
              <button onClick={()=> console.log(book.title)}>Click here</button>
              <h2>{book.author}</h2>
            </article>
          )
        })};
      </section>
    </div>
   )
}

const FormComponent = (props) =>{
  const [value, setValue] = useState('')

  const handleDefault = (event) =>{
    event.preventDefault();
    console.log(`Form submitted with the ${value}`)
    props.handleSearch(value)

  }

  const handleChange = (event) =>{
    setValue(event.target.value)
  }

  return(
    <section className='submitform'>
      <form onSubmit={handleDefault} className='sectionform'>
        <input placeholder='Enter the book name here..' type='text' value={value} onChange={handleChange}/>
        {/* here in the onClick part that is the anonynmous callback function */}
        <button type='submit' onClick={() => console.log("Button Clicked")}>Submit</button>
      </form>
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList/>);

