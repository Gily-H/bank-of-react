import { Redirect } from 'react-router-dom'
import React, { useState } from 'react'


const LogIn = (props) =>{
    const[user, setUser] = useState({
        userName: "",
        password:"",
        redirect: false,
    })

   function handleChange (e) {
        const updatedUser = {...user}
        const inputField = e.target.name
        const inputValue = e.target.value
        updatedUser[inputField] = inputValue
    
        setUser({user: updatedUser})
      }

      function handleSubmit(e) {
        e.preventDefault()
        props.mockLogIn(user)
        setUser({
            ...user,
            redirect: true})
      }

    return (
        <>
        {user.redirect ==true  ? <Redirect to="userProfile"/> : 

        <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userName">User Name</label>
            <input type="text" name="userName" onChange={handleChange} value={user.userName} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button>Log In</button>
        </form>
      </div>
        }
        
        </>
        )
}


export default LogIn
