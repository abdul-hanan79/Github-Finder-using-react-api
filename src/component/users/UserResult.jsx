import React from 'react'
import { useEffect } from 'react'
export default function UserResult() {

    // useEffect(
    //     () => {
    //             fecthUsers()
    //     }, []
    // )
    // const fecthUsers = async ()=> {
        // const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
        //     headers: {
        //         Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
        //     }
        // })
        // const data= await response.json()
        // console.log(data);
    // }
    return (
        <div>
            UserDAta
            {process.env.REACT_APP_GITHUB_URL}
        </div>
    )
}
