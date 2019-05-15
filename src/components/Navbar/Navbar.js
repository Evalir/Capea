import React from 'react';
import { StyledNavbar, StyledNav, StyledLogoLink, Spacer } from './Styled';
import TopDrawer from './TopDrawer/TopDrawer';
/* TODO:  
  - create a separate mobile / desktop navbar and just render the fitting one here.
*/
const Navbar = props => {
  return (
    <StyledNavbar>
      <StyledNav>
        <div>
          <ul>
            <li>
              <StyledLogoLink>Capea</StyledLogoLink>
            </li>
            <li>Shots</li>
            <li>Designers</li>
            <li>About</li>
          </ul>
        </div>
        <Spacer />
        <div>
          <ul>
            <li>Sign in</li>
            <li>Sign up</li>
          </ul>
        </div>
      </StyledNav>
      {/* <TopDrawer /> */}
    </StyledNavbar>
  );
};

export default Navbar;
