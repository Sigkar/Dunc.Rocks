import React, { Component } from 'react';
import posed from 'react-pose';
import '../one-off.css';
import { StaggerRemaining, StaggerChildren, LoadFade, ZeroToFullWidth} from '../poses/poses.js';

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
  state = { loadHome:false };
  toggleLoadAnimations = () => (this.setState({ loadHome: true }));
  componentDidMount(){

      setTimeout(this.toggleLoadAnimations, 500);

  }
  render(){
    const { loadHome } = this.state;
    return(
      <StaggerChildren className="Main-Template" pose={loadHome ? 'open' : 'closed'}>
        <div className="Main-Text-Spacer Main-Title-Text">
          <Title className="stripe OrangeB" pose={loadHome ? 'open' : 'closed'}>
            <InvisOnLoad className="HomeTitle">&nbsp;DESIGNER.</InvisOnLoad>
          </Title>
          <Title className="stripe RedB" pose={loadHome ? 'open' : 'closed'}>
            <InvisOnLoad className="HomeTitle">&nbsp;DEVELOPER.</InvisOnLoad>
          </Title>
          <Title className="stripe RedOrangeB" pose={loadHome ? 'open' : 'closed'}>
            <InvisOnLoad className="HomeTitle">&nbsp;GAMER.</InvisOnLoad>
          </Title>
          <Title className="stripe BlackB" pose={loadHome ? 'open' : 'closed'}>
            <InvisOnLoad className="White HomeTitle">
              &nbsp;WRITER.
            </InvisOnLoad>
          </Title>
          <div className="Geeks-Rule-The-World" pose={loadHome ? 'open' : 'closed'}>
            DUNCAN<br/>PIERCE.
          </div>
        </div>
      </StaggerChildren>
    );
  };
}
