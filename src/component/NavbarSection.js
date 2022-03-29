import {Link} from 'react-router-dom';
// import logo from '../assets/ledgerLogo.png'
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
const Navbar = () => {

    const {user} = useAuthContext()
    const {logout} = useLogout()
    console.log(user)

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