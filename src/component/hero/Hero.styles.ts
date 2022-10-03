import styled from "styled-components";

export const LayoutWrapper=styled.div`
display: flex;
margin-top: 3rem;   
padding-left: 7rem;
padding-right: 7rem;
justify-content: space-between;

@media(max-width: 500px){
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column-reverse;
}

@media(max-width:850px){
  display: flex;
  padding-left: 3rem;
  padding-right: 3rem;

  
}
`

export const Left=styled.div`
flex: 1;
display: flex; 
margin-top: 1rem;
flex-direction: column;

@media(max-width: 500px){
  order: 2:
  display: flex;
  align-items: center;
  flex-direction: column;
}

`

export const Title=styled.h1`
font-size: 4.7rem;
line-height: 4rem;
margin-bottom: 3rem;

@media(max-width: 500px){
  font-size: 1rem;
  line-height: 3rem;
  text-align: center;
  white-space: nowrap;
  margin-bottom: 2rem;
}

@media(max-width:850px){
  font-size: 2.5rem;
  white-space: nowrap;
  margin-bottom: 2.5rem;
}
`
export const Paragraph=styled.p`
color: #5E6164;
max-width: 400px;
line-height: 1.5rem;


&first-child{
  @media(max-width: 500px){
    white-space: nowrap;
  }
}

&last-child{
  margin-bottom: 4rem;
}

@media(max-width: 500px){
  font-size: .8rem;
  max-width: 300px;
  text-align:center;
}

@media(max-width:850px){
 max-width: 335px;
 font-size: .8rem;
}


`

export const Button=styled.button`
top: 0;
width: 50%;
color: #fff;
font-weight: 600;
margin-top: 2.5rem;
padding: 13px 15px;
border-radius: 10px;
border: 1px solid #000;
background-color: #000;

&:hover{
  color: #000;
  background-color: inherit;
}

// @media(max-width: 768px){
//   width: 50%;
//  white-space: nowrap;
// }
`

export const Bottom=styled.div`
display: flex;
height: 150px;
margin-top: 6rem;
align-items: center;
justifty-content: space-between;

@media(max-width: 850px){
  height: 150px;
  margin-top: 8rem;
  margin-bottom: 0;
}
`

export const Spans=styled.span`
margin-right: 2rem;


.footer-image{
  width: 70%;
  height: 70%;


  @media(max-width: 850px){
    width: 100%;
  // height: 70%;
}
}


@media(max-width:850px){
position:relative;
top: -6rem;
// margin-left: .5rem;
// margin-right: .5rem;
}
`

export const Right= styled.div`
flex: 0.8;
top: -3rem;



// @media(max-width: 320px){
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-position:  center;
//   background-image: url(../images/image-hero-mobile.png);
// }


`

export const Heroimage=styled.img`
width: 100%;
margin-left: 5rem;
position: relative;
background-size: contain;
background-repeat: no-repeat;
background-position: 80% 100%;
// background-image: url(../images/image-hero-desktop.png);

@media(max-width: 500px){
  width: 100%;
  margin-left:0;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position:  center;
 
}
`

