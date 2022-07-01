import React from 'react'

const UseStateCount = () => {
  const [value, setValue] = React.useState(0);
  const reset = () => setValue(0)

  const conplexDecrease = () => {
    setTimeout(() => {
      // The function returns the new state
      setValue((preValue) => preValue + 1)
    }, 1000)
  }
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={() => { setValue(value - 1) }}>decrease</button>
        <button className='btn' onClick={reset}>reset</button>
        <button className='btn' onClick={() => { setValue(value + 1) }}>increase</button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={conplexDecrease}>decrease</button>
      </section>
    </>
  )
}

export default UseStateCount
