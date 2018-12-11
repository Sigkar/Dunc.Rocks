import React, { Component } from 'react';
import posed from 'react-pose';
import '../one-off.css';

const options = [
  "GAMER.",
  "DEVELOPER.",
  "DESIGNER.",
  "BEER LOVER.",
  "GREATER.",
]


const StaggerChildren = posed.div({
  open:{
    staggerChildren: 250,
    delayChildren: 100
  }
});
const Title = posed.div({
  closed:{
    width: '0px',
    opacity: 0
  },
  open:{
    width: '100vw',
    opacity: 1
  }
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
            &nbsp;{"DESIGNER/"}<br/>
          </Title>
          <Title className="stripe RedB" pose={loadHome ? 'open' : 'closed'}>
            &nbsp;{"DEVELOPER;"}<br/>
          </Title>
          <Title className="stripe RedOrangeB" pose={loadHome ? 'open' : 'closed'}>
            &nbsp;GAMER.<br/>
          </Title>
          <Title className="stripe BlackB" pose={loadHome ? 'open' : 'closed'}>
            <span className="White">
              &nbsp;WRITER.
            </span><br/>
          </Title>
          <div className="Geeks-Rule-The-World" pose={loadHome ? 'open' : 'closed'}>
            DUNCAN<br/>PIERCE.
          </div>
        </div>
      </StaggerChildren>
    );
  };
}
