import {NavLink} from "react-router-dom";
import profileIcon from '../content/search/profile/profile-simple-svgrepo-com 1profile_1.svg';
import searchIcon from '../content/search/search/prodile/search-svgrepo-com 1search_01.svg';
import cartIcon from '../content/search/search/prodile/shopping-cart-svgrepo-com 1cart_01.svg'
import userLogin from '../content/man-user-svgrepo-com.svg'

export const NavBar = () => {
    return (
        <div className='nav_container'>
            <div className='logo'>
                <NavLink to="/" className='logo_style'>
                    vol_001
                </NavLink>
            </div>

            <div className='b_flex'>
                <ul className='ul'>
                    <li className="nav-item">
                        <NavLink className="nav-link routes_style" href="#" to='/'>Main</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link routes_style" href="#" to='/shop'>Shop</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link routes_style" href="#" to='/team'>Team</NavLink>
                    </li>
                </ul>
            </div>

            <div className='nav_bar_icons_d'>
                <ul className='ul mt_10'>
                    <li className='profile'>
                        <NavLink href="#" to='/register'>
                            <img src={profileIcon} alt={profileIcon}/>
                        </NavLink></li>

                    <li className='search_and_cart'>
                        <img src={searchIcon} alt={searchIcon}/>
                    </li>

                    <li className='search_and_cart'>
                        <NavLink href="#" to='/cart'>
                            <img src={cartIcon} alt={cartIcon}/>
                        </NavLink>
                    </li>
                </ul>
            </div>

        </div>
    )
}