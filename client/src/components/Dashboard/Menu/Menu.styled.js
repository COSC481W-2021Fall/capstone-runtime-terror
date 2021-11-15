import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  height: 800px;
  text-align: left;
  padding: 20px;
  position: absolute;
  top: 131.5px;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translate3d(0px, 0px, 0px)' : 'translate3d(-100%, 0px, 0px)'};
`;