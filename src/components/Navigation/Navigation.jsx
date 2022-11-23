const { NavLink } = require("react-router-dom")

const Navigation = () => {
  return (
    <>
      <NavLink to='/'>HOME</NavLink>
      <NavLink to='/about'>ABOUT</NavLink>
      <NavLink to='/what-if'>WHAT IF</NavLink>
    </>
  )
};

export default Navigation;