import React,{ useState} from 'react'
import {
  Logo,
  List,
  Image,
  SignIn,
  Header,
  Menu,
  Images,
  Navicon,
  Dropdown,
  NavWrapper,
  Navlist,
  Navright,
  Register,
  ListItem,
  DropdownList,
  // NalistWrapper,
} from './Navbar.styles'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [toggleIcon, setToggleIcon]=useState(false)
  const [show, setShow]=useState(false)


  const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

  const handleToggle = () => setToggleIcon((prev) => !prev);
  const handleShow = () => setShow(current => !current);

  return (
    <Header>
      <Logo src='../images/logo.svg' alt='logo image'/>
         <NavWrapper >
      
        <Navlist className={open ? 'nav-links active' : 'nav-links'}>
          <List onClick={handleToggle} className='navlink'> Features {toggleIcon ? <img src='../images/icon-arrow-down.svg' onClick={closeMenu}/> : <img src='../images/icon-arrow-up.svg'/>}
          
            <DropdownList onClick={handleShow} className={show ? 'show-dropdown' : ''} >
              <ListItem><a href='#' className='links'>Todo List</a><Image src='../images/icon-todo.svg ' alt=''/></ListItem>
              <ListItem><a href='#' className='links'><Image src='../images/icon-calender.svg' alt=''/>Calender</a></ListItem>
              <ListItem><a href='#' className='links'><Image src='../images/icon-reminders.svg' alt=''/>Reminder</a></ListItem>
              <ListItem><a href='#'className='links'><Image src='../images/icon-planning.svg' alt=''/>Planning</a></ListItem>
            </DropdownList>

          </List>
          {/* className={toggleIcon ? 'show-dropdown' : ''} */}
          <List onClick={handleToggle} className='navlink'>Company{toggleIcon ? <img src='../images/icon-arrow-down.svg'/> : <img src='../images/icon-arrow-up.svg' onClick={closeMenu}/>}
          <Dropdown className='show-dropdown'>
            <ListItem><a href='#' className='links'>History</a></ListItem>
            <ListItem><a href='#' className='links'>Our Team</a></ListItem>
            <ListItem><a href='#' className='links'>Blog</a></ListItem>
            </Dropdown>
          </List>

          <List onClick={closeMenu} className='navlink'>Carrers</List>
          <List onClick={closeMenu} className='navlink'>About</List>

      
        </Navlist>
            <Navright>
              <SignIn onClick={closeMenu}>Login</SignIn>
              <Register onClick={closeMenu}>Register</Register>
            </Navright>
        </NavWrapper> 
        <Navicon onClick={handleClick} className="nav-icon">
          {open ? <Menu src='../images/icon-menu.svg' /> : <Menu src='../images/icon-close-menu.svg' alt='' />}
        </Navicon>
        
    </Header>
  )
}

export default Navbar
