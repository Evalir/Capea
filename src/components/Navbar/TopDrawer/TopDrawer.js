import React from 'react';
import { StyledDrawer } from './Styled';

const TopDrawer = props => {
  const show = props.show ? true : false;
  return (
    <StyledDrawer show={show}>
      <ul>
        <li>Shots</li>
        <li>Designers</li>
      </ul>
    </StyledDrawer>
  );
};

export default TopDrawer;
