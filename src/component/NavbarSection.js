import {Link} from 'react-router-dom';
import logo from '../assets/ledgerLogo.png'
const Navbar = () => {

    return(
        <header>
            <nav>
                <div >
                    <img src='' alt="" />
                </div>
                <ul>
                    <li>
                        <Link to='/login' >Login</Link>
                    </li>
                    <li>
                        <Link to='/signup' >Signup</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;