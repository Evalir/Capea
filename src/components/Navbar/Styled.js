import styled from 'styled-components';

export const StyledNavbar = styled.header`
  width: 100%;
  background-color: ${props => props.theme.black};
  height: 64px;
`;

export const StyledNav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1em;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;

    li {
      padding: 0 0.5rem;
    }
  }
`;
