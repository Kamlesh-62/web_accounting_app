import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {login, error, pending} = useLogin()

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        login(email, password)
    }
    
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
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
            {pending && <button disabled style={{ backgroundColor: "lightblue" }}>Login...</button>}
            {error && <p>{error}</p>}
        </form>
    )
}
export default Login;