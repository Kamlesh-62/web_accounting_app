import {Link} from 'react-router-dom';
// import logo from '../assets/ledgerLogo.png'
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
const Navbar = () => {

    const {user} = useAuthContext()
    const {logout} = useLogout()

    return(
        <header>
            <nav>
                <div >
                    <img src='' alt="" />
                </div>
                <ul>
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
                                <Link to='/balancesheet'> Balance Sheet</Link>
                            </li>
                            <li>Hello, {user.displayName}</li>
                            <li>
                                <button onClick={logout}>Logout</button>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;