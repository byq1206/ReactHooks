import React from 'react'

const ControlledInputs = () => {
  const [firstName, setFirstName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [people, setPeople] = React.useState([]);
  const submitInput = (e) => {
    e.preventDefault()
    if (email && firstName) {
      const person = { id: new Date().getTime().toString(), email, firstName };
      setPeople((people) => {
        return [...people, person]
      })
      setEmail("");
      setFirstName("");
    } else {
      console.log("empty values");
    }
  }
  return (
    <>
      <article>
        <form className='form' onSubmit={submitInput}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type="text"
              value={firstName}
              id="firstName"
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='Email'>Email : </label>
            <input
              type="text"
              value={email}
              id='Email'
              name='Email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* <input> </input> */}
          <button type='submit'>submit</button>
        </form>
        {
          people.map((people) => {
            return (
              <div className='item' key={people.id}>
                <h2>{people.firstName}</h2>
                <p>{people.email}</p>
              </div>
            )
          })
        }
      </article>
    </>
  )
}

export default ControlledInputs
