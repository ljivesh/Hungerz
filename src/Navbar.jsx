import {Link} from 'react-router-dom';
import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import './Navbar.css';
import { logoutUser } from './actions/userAction';

function Navbar() {

    const cartState = useSelector(state=> state.cartReducer);
    const {cartItems} = cartState;

    const  userState  = useSelector(state=> state.loginUserReducer);
    const {currentUser} = userState;

    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };

    return (
        <nav className='navbar'>
            <div className='navbar-title'>
                <Link to="/" ><h2>Hungerz</h2></Link>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                        {!currentUser ? (<Link to="/Login" >Login</Link>) : (
                            <div>
                                <Button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    <strong>
                                        {currentUser.name}
                                    </strong>
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={()=> window.location.href='/orders'}>Orders</MenuItem>
                                    <MenuItem onClick={dispatch(logoutUser)}>Logout</MenuItem>
                                </Menu>
                            </div>
                        )}
                    </li>
                    <li>
                        <Link to="/Cart" >Cart {cartItems.length} </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;