import { useState } from "react";

const Signup = () => {

    const[password,setPassword] = useState('') 
    const[email,setEmail] = useState('') 
    const[userName,setUserName] = useState('') 

    const handleSignUpSubmit = (e) => {
        e.preventDefault()
        console.log(userName,email,password)
    }
    

    return (
        <form action="" onSubmit={handleSignUpSubmit}>
            <label htmlFor="userName">User Name</label>
            <input 
            type="text" 
            placeholder="User Name" 
            id="userName"
            onChange={(e) => setUserName(e.target.value)}
            value={userName} />
            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            placeholder="Email Address" 
            id="email" 
            onChange={(e) => setEmail(e.target.value) }
            value={email}/>
            <label htmlFor="password">Password</label>
            <input 
            type="password" 
            placeholder="Password" 
            id="password"
            onChange={(e) => setPassword(e.target.value) }
            value={password} />
            <button>Signup</button>
        </form>
    )
}
export default Signup;