import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/LogoHdToday.png";
import Styles from '../Style/header.module.css'
import MovieContext from "../Context/Contex";
function Header() {
   const {SetSearch} = useContext(MovieContext)
   return (
      <section className={ `${Styles.Header_Section} sticky-top `}>
         <nav className=' container-fluid navbar navbar-expand-lg'>
            <div className='container-fluid'>
               <a className='navbar-brand' href='/Home'>
                  <img width={100} src={Logo} alt='Company Logo' />
               </a>

               <button
                  className='navbar-toggler'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarNav'
                  aria-controls='navbarNav'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
               >
                  <span className='navbar-toggler-icon'></span>
               </button>
               <div
                  className='collapse navbar-collapse justify-content-end'
                  id='navbarNav'
               >
                  <ul className='navbar-nav'>
                     <li className='nav-item'>
                        <NavLink
                           className='nav-link fw-bold text-light active'
                           to='/Home'
                        >
                           Home
                        </NavLink>
                     </li>
                     <li className='nav-item'>
                        <NavLink
                           className='nav-link fw-bold text-light'
                           to='/Movies'
                        >
                           Favorate
                        </NavLink>
                     </li>
                     <li className='nav-item'>
                        <NavLink
                           className='nav-link fw-bold text-light'
                           to='/Tv-shows'
                        >
                           Tv-shows
                        </NavLink>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
         <div className="p-3 container">
            <input
               onChange={(e) => SetSearch(e.target.value)}
               className='form-control p-2 '
               type='text'
               placeholder='Search your movie here...'
            />
         </div>
      </section>
   );
}

export default Header;
