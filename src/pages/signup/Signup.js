import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

const Signup = () => {

    const[password,setPassword] = useState('') 
    const[email,setEmail] = useState('') 
    const[displayName,setUserName] = useState('')
    const { signup, error, pending } = useSignup();

    const handleSignUpSubmit = (e) => {
        e.preventDefault()
        signup(email, password, displayName)
        console.log(displayName,email,password)
    }
    

    return (
        <form action="" onSubmit={handleSignUpSubmit}>
            <label htmlFor="displayName">User Name</label>
            <input 
            type="text" 
            placeholder="User Name" 
            id="displayName"
            onChange={(e) => setUserName(e.target.value)}
            value={displayName} />
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
            {!pending && <button>Signup</button> }
            {pending && <button disabled style={{ backgroundColor: "lightblue" }}>Signup...</button> }
            {error && <p>{error}</p>}
        </form>
    )
}
export default Signup;