import React from 'react'

interface User {
  id:string,
  name:string
}

const UsersPage = async () => {
const res = await fetch('https://jsonplaceholder.typicode.com/users');
const users:User[] = await res.json()

 return (
    <>
      <h1 className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-600'>Users Details</h1>
      <ul>
      {users.map(user=>{
       return <li key={user.id}>{user.id} : {user.name}</li>
      })}
      </ul>
    </>
  )
}

export default UsersPage
