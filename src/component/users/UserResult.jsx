import React from 'react'
import { useContext } from 'react'
import Spinner from '../layouts/Spinner'
import UserItems from './UserItems'
import GithubContext from '../../context/github/GithubContext'
export default function UserResult() {
    const { users, loading } = useContext(GithubContext)

console.log("users",users)
    if (!loading) {
        return (

            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                
                {users.map((user) => (
                    <UserItems key={user.id} user={user} />
                ))}

            </div>
        )
    }
    else {
        return <Spinner />
    }
}
