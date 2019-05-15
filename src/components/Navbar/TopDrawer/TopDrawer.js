import React from 'react';
import { StyledDrawer } from './Styled';

const TopDrawer = props => {
  const isOpen = props.isOpen ? 'show' : 'hide';
  return (
    <StyledDrawer className={`sidedrawer ${isOpen}`}>
      <ul>
        <li>Shots</li>
        <li>Designers</li>
        <li>Sign in</li>
      </ul>
    </StyledDrawer>
  );
};

export default TopDrawer;
