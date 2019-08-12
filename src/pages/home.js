import React, { Component } from 'react';
import posed from 'react-pose';
import '../one-off.css';
import { StaggerChildren, PulseSize } from '../poses/poses.js';

const Title = posed.div({
  open:{
    width: '100vw',
    transition:{
      duration:600,
    },
    beforeChildren:true,
    delayChildren: 200,
    staggerChildren: 50
  },
  closed:{
    width: '0px',
  }
});
const InvisOnLoad = posed.div({
  closed:{
    opacity:0,
  },
  open:{
    opacity:1,
  },
});


export class Home extends Component{
  state = { loadHome:false, isSmall:false };
  toggleLoadAnimations = () => (this.setState({ loadHome: true }));
  togglePulse = () => (
    setInterval(() => {this.setState({ isSmall: !this.state.isSmall })}, 2000)
  )
  componentDidMount(){
      setTimeout(this.toggleLoadAnimations, 500);
      setTimeout(this.togglePulse, 1750);
  }
  render(){
    const { loadHome, isSmall } = this.state;

    return(
      <StaggerChildren className="Main-Template" pose={loadHome ? 'open' : 'closed'}>
        <div className="Main-Text-Spacer Main-Title-Text Home-Stripe-Override">
          <Title className="stripe OrangeB" pose={loadHome ? 'open' : 'closed'}>
            <InvisOnLoad className="HomeTitle">&nbsp;BUSINESS.</InvisOnLoad>
          </Title>
          <Title className="stripe RedB" pose={loadHome ? 'open' : 'closed'}>
            <InvisOnLoad className="HomeTitle">&nbsp;DESIGN.</InvisOnLoad>
          </Title>
          <Title className="stripe RedOrangeB" pose={loadHome ? 'open' : 'closed'}>
            <InvisOnLoad className="HomeTitle">&nbsp;DEVELOPMENT.</InvisOnLoad>
          </Title>
          <Title className="stripe BlackB"  pose={loadHome ? 'open' : 'closed'}>
            <InvisOnLoad className="White HomeTitle">
              &nbsp;CONSULTING.
            </InvisOnLoad>
          </Title>
          <InvisOnLoad>
          <PulseSize className="Geeks-Rule-The-World" pose={isSmall ? 'small' : 'large'}>
            DUNCAN<br/>PIERCE
          </PulseSize>
          </InvisOnLoad>
        </div>
      </StaggerChildren>
    );
  };
}
