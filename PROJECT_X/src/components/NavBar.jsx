import { useAuth0, User } from '@auth0/auth0-react';
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { Button } from '../Styles/Button';

const NavBar = () => {

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0()

    const Nav = styled.nav`
    .navbar-list {
      display: flex;
      align-items: center;
      gap: 4.8rem;
      li {
        list-style: none;
        .navbar-link {
          &:link,
          &:visited {
            display: inline-block;
            text-decoration: none;
            font-size: 1.8rem;
            text-transform: uppercase;
            color: ${({ theme }) => theme.colors.black};
            transition: color 0.3s linear;
          }
          &:hover,
          &:active {
            color: ${({ theme }) => theme.colors.helper};
          }
        }
      }
    }
    `;

  return (
    <Nav>
      <div className='menuIcon'>
        <ul className='navbar-list'>
            <li>
                <NavLink className='navbar-link' to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink className='navbar-link' to='/services'>Services</NavLink>
            </li>
            <li>
                <NavLink className='navbar-link' to='/about'>About</NavLink>
            </li>
            <li>
                <NavLink className='navbar-link' to='/contact'>Contact</NavLink>
            </li>

            { isAuthenticated ? (
              <li>
                 <Button onClick={() => logout({ returnTo: window.location.origin })}>Logout</Button>
              </li>
            ) : (
              <li>
            <Button onClick={() => loginWithRedirect()}>Login</Button>
            </li>
            )}

            {isAuthenticated && (
              <li>
                <h3>Welcome {User.name}</h3>
              </li>
             )}     
                        
        </ul>
      </div>
    </Nav>
  )
}

export default NavBar
