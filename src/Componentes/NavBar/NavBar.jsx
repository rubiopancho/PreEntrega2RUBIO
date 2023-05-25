import React from 'react'
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <header>
        <div className='titulo'>
          <Link to={"/"}>
            <h1 className='titulo1'>Tanbonel</h1>
          </Link>
            
            <h4>Tienda online</h4>
        </div>
       
        <nav>
            <ul>
                <li>
                  <NavLink to={`/categoria/1`}> Alfombras </NavLink>
                </li>
                <li>
                <NavLink to={`/categoria/2`}> Pantuflas </NavLink>
                </li>
                <li>
                <NavLink to={`/categoria/3`}> Almohadon </NavLink>
                </li>
                <li>
                <NavLink to={`/categoria/4`}> Carteras </NavLink>
                </li>
            </ul>
        </nav>


    </header>
  )
}

export default NavBar