/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


function Header() {
  return (
    <div className='header'>
        <img src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" height={85} width={200}/>
        <div
        className='header__location'>
            <div className='header__option'>
                <span className='header__optionLineOne'>
                    hello
                </span>

                <span className='header__optionLineTwo'>
                    Select location                
                </span>
            </div>
        </div>
        
        <div
        className='header__search'>
            <input className='header__searchInput' type="text" />
            <SearchIcon
                className='header__searchIcon'
            />
        </div>

        <div className='header__nav'>
            <div className='header__option'>
                <span className='header__optionLineOne'>
                    hello guest
                </span>

                <span className='header__optionLineTwo'>
                    Sign In
                </span>
            </div>

            <div className='header__option'>
                <span className='header__optionLineOne'>
                    returns
                </span>

                <span className='header__optionLineTwo'>
                    Orders
                </span>
            </div>

            <div className='header__option'>
                <span className='header__optionLineOne'>
                    Your
                </span>

                <span className='header__optionLineTwo'>
                    Prime
                </span>
            </div>

            <div className='header__optionBasket'>
                <AddShoppingCartIcon />
                <span className='header__optionLineTwo header__basketCount'>0</span>
            </div>
        </div>
    </div>
  )
}

export default Header