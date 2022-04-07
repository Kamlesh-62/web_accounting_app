import {Link} from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import './navbarSection.scss'
const Navbar = () => {

    const {user} = useAuthContext()
    const {logout} = useLogout()

    return(
        <header>
            <nav className='navbar wrapper'>
                <div className='compnay-logo'>
                    
                    <h3><Link to='/'>Money Tracker</Link></h3>
                    {/* <img src={logo} alt="This is comany logo" /> */}
                </div>
                <ul className='menu'>
                    {!user && (
                        <>
                            <li>
                                <Link to='/login' >Login</Link>
                            </li>
                            <li>
                                <Link to='/signup' >Signup</Link>
                            </li>
                        </>
                    )}
                    {user && (
                        <>
                            <li>
                                <Link to='/'> Home</Link>
                            </li>
                            <li>
                                <Link to='/report'> Report</Link>
                            </li>
                            <li className='userName'>Hello, {user.displayName}</li>
                            <li className='logOut-btn'>
                                <button  className='btn' onClick={logout}>Logout</button>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;