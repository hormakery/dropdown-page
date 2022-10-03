import React from 'react'
import {
  Left,
  Right,
  Spans,
  Title,
  Button,
  Bottom,
  Heroimage,
  Paragraph,
  LayoutWrapper,
} from './Hero.styles'

const Hero = () => {
  return (
    <LayoutWrapper>
      <Left>
        <Title>Make  remote work </Title>
        <Paragraph>
          Get your team in sync, no matter your location.
        </Paragraph>
         <Paragraph>Streamline processes, create team rituals, and watch productivity soar.</Paragraph> 

         <Button>Learn more</Button>

         <Bottom>
            <Spans><img src='../images/client-databiz.svg' className='footer-image' alt=''/> </Spans>
            <Spans><img src='../images/client-audiophile.svg' alt='' className='footer-image'/> </Spans>
            <Spans><img src='../images/client-meet.svg' alt='' className='footer-image'/> </Spans>
            <Spans><img src='../images/client-maker.svg' alt='' className='footer-image'/> </Spans>
         </Bottom>
      </Left>
      
      <Right>
      <picture>
          <source media="(max-width:500px)" srcSet="../images/image-hero-mobile.png"/>
          <Heroimage src="../images/image-hero-desktop.png" alt="hero image" />
        </picture>
      </Right>
    </LayoutWrapper>
  )
}

export default Hero
