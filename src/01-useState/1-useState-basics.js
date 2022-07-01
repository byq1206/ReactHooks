import React, { useState } from 'react'

const UseStateBasics = () => {
  // console.log(useState());

  // const value = useState()[0];
  // const handle = useState()[1];
  // console.log(value, handle);

  const [text, setText] = useState("radom title")
  const handleText = () => {
    if (text === "radom title") {
      setText("hello world")
    } else {
      setText("radom title")
    }
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleText}>change title</button>
    </React.Fragment>
  )
}

export default UseStateBasics
