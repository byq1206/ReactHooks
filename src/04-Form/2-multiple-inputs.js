import React from 'react'

const MultipleInputs = () => {
  const [person, setPerson] = React.useState({ firstName: "", email: "", age: "" })
  const [people, setPeople] = React.useState([])
  const HandleSubmit = (e) => {
    e.preventDefault()
    if (person.firstName && person.email && person.age) {
      setPeople([...people, person])
      setPerson({ firstName: "", age: "", email: "" })
    }
  }
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value, id: new Date().getTime().toString() })
  }
  return (
    <>
      <article>
        <form className='form' onSubmit={HandleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type="text"
              value={person.firstName}
              id="firstName"
              name="firstName"
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type="text"
              value={person.email}
              id='email'
              name='email'
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type="text"
              value={person.age}
              id='age'
              name='age'
              onChange={handleChange}
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

export default MultipleInputs