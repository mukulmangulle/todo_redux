import React from 'react'
import Form from './Form'
import Navbar from './Navbar'
import ListGroup from './ListGroup'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Form />
        <ListGroup />
      </div>
    </>
  )
}

export default App