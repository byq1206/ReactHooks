import React, { useEffect, useRef } from 'react'
// useRef does not trigger render
const UseRefBasic = () => {
  const inputRef = useRef(null);
  const divRef = useRef(null);
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(inputRef.current);
  }
  return (
    <>
      <form className='form' onSubmit={onSubmit}>
        <input type="text" ref={inputRef} />
        <button type='submit' className='btn'>Submit</button>
      </form>
      {/* <div ref={divRef}>Hello World!</div> */}
    </>
  )
}

export default UseRefBasic