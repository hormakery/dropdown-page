import styled from "styled-components";

export const Header =styled.header`
height: 100px;
width: 100%;
display: flex;
padding:0 5rem;
font-size: .8rem;
align-items: center;
background-color: inherit;
justify-content: space-between;
transition: all .20s ease-in-out;


@media(max-width: 850px){
  display: flex;
  padding: 0 2rem;
 justify-content: space-between;
 transition: all .20s ease-in-out;
}
`

export const NavWrapper=styled.div`
display: flex;
justify-content: space-between;
`

export const Logo = styled.img`

`

export const Navlist=styled.ul`
flex: 1;
display: flex;
list-style: none;
margin-left: 3.9rem;
transition: all .3s ease-in-out;



// .navlink{
//   color: #5E6164;
//   text-decoration: none;
//   transistion:  .25s all ease-in-out; 

// }

.navlinks.active{
  background-color: white;
}

.nav_links{
  @media(max-width: 850px){
    display: flex;
		flex-direction: column;
		position: absolute;
		text-align: center;
		width: 100%;
		top: 80px;
		left: -100%;
		transition: 0.5s all;
  }
}

@media(max-width: 768px){
  width: 280px;
  height: 100vh;
  min-height: 900px;
  margin: 0;
  padding: 4.65rem 2rem 0 2rem;
  visibility: hidden;
  flex-direction: column;
  position: absolute;
  right: -400px;
  top: 0;
  transition: 0.5s all;
}

@media(max-width: 850px){
  top: 0;
  width: 280px;
  margin: 0;
  height: 100vh;
    right: -400px;
    visibility: hidden;
    position: absolute;
    min-height: 900px;
    flex-direction: column;
    background-color: green;
    padding: 4.65rem 2rem 0 2rem;
}

`

export const List=styled.li`
float: left;
width: 100px;
height: 40px;
color: #5E6164;
cursor: pointer;
line-height: 40px;
margin-right: .95rem;

&:hover{
  color: #000;
  font-weight: 500;
  transform: scale(1);
}

@media(max-width: 768px){
  padding: 10px 0;

}
`


export const DropdownList=styled.ul`
display: none;
margin-top: 1.2rem;
border-radius: 10px;
transform: scale(0);
position: absolute;
background-color: white;
transform-origin: top center;
transition: all 300ms ease-in-out;
padding: 1.5rem 1.6rem 0.5rem 1.6rem;
box-shadow: 0 0 2rem rgb(0 0 0 / 12%);

.show-dropdown{
  opacity: 1;
  display: block;
  animation: fadein .5s;
}

.links{
  color: #000;
  display: block;
  padding: 0 10px;
  font-size: 20px;
  line-height: 60px;
  text-decoration: none;

`

export const Dropdown=styled.ul`
display: none;
position: absolute;
padding: 1.5rem 1.6rem 0.5rem 1.6rem;
margin-top: 1.2rem;
border-radius: 10px;
background-color: white;
box-shadow: 0 0 2rem rgb(0 0 0 / 12%);
opacity: 0;
transition: all .2s ease-in-out;


.show-dropdown{
  opacity: 1;
  display: block;
  animation: fadein .5s;
}
`

export const ListItem=styled.li`
color: #5E6164;
padding: 8px 0;
font-size: .6rem;
transform: scale(0);
background-color: #2980B9;
transform-origin: top center;
transition: all 300ms ease-in-out;

&:hover{
  transform: scale(1);
  background-color: #2980B9;
  box-shadow: 10px 10px 79px 0px rgba(255,255,255,0.75);
 -webkit-box-shadow: 10px 10px 79px 0px rgba(255,255,255,0.75);
 -moz-box-shadow: 10px 10px 79px 0px rgba(255,255,255,0.75);
}
`


export const Navright = styled.ul`
flex: 0.5;
display: flex;
margin-left: auto;
align-items: center;
justify-content: flex-end;

@media(max-width: 850px){
  display: none;
}
`

export const SignIn=styled.li`
color: #5E6164;
font-weight: 500;
list-style: none;
text-decoration: none;

&:hover{
  color: #000;
}
`

export const Register=styled.button`
color: #5E6164;
font-weight: 600;
padding: 12px 25px;
border-radius: 8px;
margin-left: 2rem;
border: 1px solid #5E6164;
background-color: inherit;

&:hover{
  color: #000;
}
`

export const Images=styled.img`
width: 10%;
height: 20px;
`

export const Image=styled.img`
height: 30px;
width: 30px;
`

// export const Button=styled.button`
// width: 100%;
// height: 20px;
// display: none;
// border: none;
// background-color: inherit;
// // opacity: 0;
// // border: none;
// // padding: 2rem;
// // color: #5E6164;
// // outline: none;
// // cursor: pointer;
// // visibility: hidden;
// // background-color: #fff;

// @media(max-width: 650px){
//   // visivility: visible;
//   display: block;
// }

// .nav-closeBtn{
//  @media(max-width: 650px){
//   right: 2rem;
//   top: 2rem;
//  } 
// }
// `

export const Menu=styled.img`
// height: 10px;
// width: 20%;


@media(max-width: 850px){
  display: block;
  visibility: visible;
  position: relative;

}
`


export const Navicon=styled.button`
border: none;
width: 100%;
height: 20px;
cursor: pointer;
visibility: hidden;

@media(max-width: 850px){
  display: flex;
  justify-content: flex-end;
}
`