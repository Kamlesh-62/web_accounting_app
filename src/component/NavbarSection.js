import {Link} from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
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
                {user &&(
                <>
                    <label htmlFor="hamburgerToggle">
                        <FontAwesomeIcon className="hamburgerMenu" icon={faBars} />
                    </label>
                    <input type="checkbox" id="hamburgerToggle" className="toggelMenuCheckBox" />
                </>
                )}
                <ul className='menu'>
                    {!user && (
                        <div className='menuBeforeLogin'>
                            <li>
                                <Link to='/login'>Login</Link>
                            </li>
                            <li>
                                <Link to='/signup'>Signup</Link>
                            </li>
                        </div>
                    )}
                    {user && (
                        <div className='menuAfterLogin'>
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
                            
                        </div>
                    )}
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;