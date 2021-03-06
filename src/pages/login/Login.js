import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import './login.scss'
import girlImage from '../../assets/girlImage.png'

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
        <section className="login wrapper">
            <h2>Login</h2>
            <p className="companyHeading">View a summary of money coming in and going out on the Money Tracker dashboard, and in cash flow reports.</p>
            <div className="login-form">
                <form onSubmit={handleLoginSubmit}>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input 
                    type="email" 
                    id="email" 
                    placeholder="Email Address"
                    onChange={handleEmail}
                    value={email} />
                    <label htmlFor="password" className="sr-only" >Password</label>
                    <input 
                    type="password" 
                    id="password" 
                    placeholder="Password"
                    onChange={handlePassword}
                    value={password} />
                    {!pending && <button className="login-btn btn">Login</button>}
                    {pending && <button disabled className="login-disable-btn btn" >Login...</button>}
                    {error && <p>{error}</p>}
                </form>
                <div className="girlImage">
                    <img src={girlImage} alt="girl is writing on account page" />
                </div>
            </div>
        </section>
    )
}
export default Login;