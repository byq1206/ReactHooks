import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import reducer from "./reducer"
const UseReducer = () => {

  const deafultValue = {
    isModel: false,
    people: [],
    modelContent: "hello world"
  }
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, deafultValue)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name }
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("")
    } else {
      dispatch({ type: "NO_VALUE" })
    }
  }
  const handleDelete = (people) => {
    const newPeople = state.people.filter((item) => item.id !== people.id)

  }
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };
  // console.log(state);
  return (
    <>
      {state.isModel && <Modal closeModal={closeModal} modelContent={state.modelContent} />}
      <form className='form' onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button type='submit'>ADD</button>
      </form>
      {
        state.people.map((people) => {
          return <div key={people.id} className="item">
            <h4>{people.name}</h4>

            <button className='btn' onClick={() => dispatch({ type: "DELETE_ITEM", payload: people })}>Delete</button>
          </div>
        })
      }
    </>
  )
}

export default UseReducer 