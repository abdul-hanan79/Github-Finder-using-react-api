import React from 'react'
import UserResult from '../component/users/UserResult'
import UserSearch from '../component/users/UserSearch'
function Home() {
  return (
    <>
      <UserSearch />
      <UserResult />

    </>
  )
}
console.log(process.env.REACT_APP_GITHUB_URL);
console.log(process.env.REACT_APP_TOKEN);

export default Home
        // const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
