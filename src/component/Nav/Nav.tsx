import React,{useState} from 'react'
import {
  Logo,
  Menu,
  Login,
  Navbar,
  SignUp,
  NavLinks,
  Navitem,
  Register,
  NavWrapper,
} from './Nav.styles'
import { Link,  } from 'react-router-dom'

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <Navbar>
      <Link to={'/'}  onClick={()=>setOpen(false)}><Logo src='../images/logo.svg' alt='logo image'/></Link>

      <NavWrapper >
        <NavLinks className={open ? 'nav-links active': 'nav-links'}>
          <Navitem><Link to={'/features'}  className="navlink" onClick={()=>setOpen(false)}>Features</Link></Navitem>
          <Navitem><Link to={'/company'} className="navlink" onClick={()=>setOpen(false)}>Company</Link></Navitem>
          <Navitem><Link to={'/carrers'} className="navlink" onClick={()=>setOpen(false)}>Carrers</Link></Navitem>
          <Navitem><Link to={'/about'}  className="navlink" onClick={()=>setOpen(false)}>About</Link></Navitem>
        </NavLinks>

        <SignUp>
          <Login>Login</Login>
          <Register>Register</Register>
        </SignUp>
      </NavWrapper>
        <div onClick={() => setOpen(!open)} className="nav-icon">
          {open ? <Menu src='../images/icon-menu.svg' /> : <Menu src='../images/icon-close-menu.svg' alt='' />}
        </div>
    </Navbar>
  )
}

export default Nav
