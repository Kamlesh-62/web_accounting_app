import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import manImage from '../../assets/manImage.png'
import './signUp.scss'

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
        <div className="signUp wrapper">
            <h2> Signup here</h2>
            <p className="companyHeading" >View a summary of money coming in and going out on the Money Tracker dashboard, and in cash flow reports.</p>
            <div className="signUp-form">
                <form onSubmit={handleSignUpSubmit} >
                    <label htmlFor="displayName" className="sr-only">User Name</label>
                    <input 
                    type="text" 
                    placeholder="User Name" 
                    id="displayName"
                    onChange={(e) => setUserName(e.target.value)}
                    value={displayName} />
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input 
                    type="email" 
                    placeholder="Email Address" 
                    id="email" 
                    onChange={(e) => setEmail(e.target.value) }
                    value={email}/>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input 
                    type="password" 
                    placeholder="Password" 
                    id="password"
                    onChange={(e) => setPassword(e.target.value) }
                    value={password} />
                    {!pending && <button className="signUp-btn btn" >Sign up</button> }
                    {pending && <button  className="signUp-disable-btn btn" disabled >Signup...</button> }
                    {error && <p>{error}</p>}
                </form>
                <div className="manImage">
                    <img src={manImage} alt="Man is standing and holding register in hand" />
                </div>
            </div>
        </div>
    )
}
export default Signup;