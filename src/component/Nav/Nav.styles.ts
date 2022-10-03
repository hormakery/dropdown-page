import styled from "styled-components";

export const Navbar=styled.header`
height: 100px;
width: 100%;
display: flex;
padding:0 5rem;
font-size: 1.2rem;
align-items: center;
background-color: inherit;
// justify-content: space-between;
` 
export const Logo =styled.img`
`

export const NavWrapper=styled.div`
display: flex;
justify-content: space-between;

.nav-icon{
  display: none;
  font-size: 2rem;
  cursor: pointer;

  @media(max-width: 768px){
    display: flex;
  }
}
`

export const NavLinks=styled.ul`
flex: 1;
display: flex;
list-style: none;

.navlink{
  color: #5E6164;
  text-decoration: none;
  transistion:  .25s all ease-in-out; 

}

.navlinks active{
  background-color: white;
}

@media(max-width: 768px){
  display: flex;
  position: absolute;
  text-align: left;
  width: 100%;
  top: 100px;
  right: 100%;
  transition: 0.5s all;
}
`

export const Navitem=styled.li`
@media(max-width: 768px){
  padding: 10px 0;

}
`

export const SignUp=styled.div`
flex: 0.8;
display: flex;
justify-content: space-between;
`

export const Login=styled.div`

`

export const Register=styled.button`
font-weight: 600;
border-radius: 10px;
padding: 13px 25px;
background-color: inherit;
border: 1px solid #5E6164;
`

export const Menu=styled.img`
height: 10px;
width: 20%;
`