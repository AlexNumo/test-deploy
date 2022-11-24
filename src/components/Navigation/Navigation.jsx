import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Style = styled(NavLink)`
  width: 100px;
  margin: 25px 25px 25px 25px;
  border: 2px solid;
  background-color: #b7d7d7;
  padding: 10px 10px 10px 10px;
`;

const Navigation = () => {
  return (
    <>
      <Style to='/'>HOME</Style>
      <Style to='/about'>ABOUT</Style>
      <Style to='/what-if'>WHAT IF</Style>
    </>
  )
};

export default Navigation;