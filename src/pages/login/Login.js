import { useState } from "react";

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log(email,password)
    }
    
    const handleEmail = (e) => {
        setEmail(e.target.value)
        console.log(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        console.log(e.target.value)
    }   


    return (
        <form action="" onSubmit={handleLoginSubmit}>
            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            id="email" 
            placeholder="Email Address"
            onChange={handleEmail}
            value={email} />
            <label htmlFor="password">Password</label>
            <input 
            type="password" 
            id="password" 
            placeholder="Password"
            onChange={handlePassword}
            value={password} />
            <button>Login</button>
        </form>
    )
}
export default Login;