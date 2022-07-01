import React from 'react'

const UseEffectCleanUp = () => {
  const [size, setSize] = React.useState(window.innerWidth)
  const checkSize = () => {
    setSize(window.innerWidth)
  }
  React.useEffect(() => {
    window.addEventListener("resize", checkSize)
    // return () => {
    //   window.removeEventListener("resize", checkSize)
    // }
  })
  return (
    <div>
      <h1>Window</h1>
      <h2>{size}px</h2>
    </div>
  )
}

export default UseEffectCleanUp
