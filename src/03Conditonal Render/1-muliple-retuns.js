import React from 'react'
const url = 'https://api.github.com/users/QuincyLarsons'

const MulipleReturns = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState("default User");
  const [isError, setIsError] = React.useState(false);
  React.useEffect(() => {
    fetch(url)
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          response.json()
        } else {
          setIsLoading(false)
          setIsError(true);
          throw new Error(response.statusText)
        }
      })
      .then(user => {
        const { login } = user
        setUser(login)
        setIsLoading(false)
      })
      .catch((error) => console.log(error))
  })
  if (isLoading) {
    return <>Loading</>
  }
  if (isError) {
    return <>Error</>
  }
  return <>{user}</>
}

export default MulipleReturns
