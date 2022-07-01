import React from 'react'

const UseEffectBasics = () => {
  const [value, setValue] = React.useState(0)
  React.useEffect(() => {
    console.log("call useEffect");
    document.title = `New Message ${value}`;
  })
  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>Click Me</button>
    </>
  )
}

export default UseEffectBasics
