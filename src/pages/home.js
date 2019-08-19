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

const descriptors = [
  "DESIGNER",
  "WRITER",
  "CONSULTANT",
  "TECHNOWIZZ",
  "RETROPHILE",
  "HIPSTER",
  "ENGINEER",
  "PROGRAMMER",
  "BROTHER",
  "PARTNER",
]

export class Home extends Component{
  constructor(props){
    super(props);
    this.state = { loadHome:false, isSmall:false, descriptors: ["","","",""] };
    this.getRandomText = this.getRandomText.bind(this);

  }
  toggleLoadAnimations = () => (this.setState({ loadHome: true }));
  togglePulse = () => (
    setInterval(() => {this.setState({ isSmall: !this.state.isSmall })}, 2000)
  )
  componentDidMount(){
      setTimeout(this.toggleLoadAnimations, 500);
      setTimeout(this.togglePulse, 1750);
      this.getRandomText();
  }
  getRandomText(){
    let randomDescriptors = []
    while(randomDescriptors.length < 3){
        let randomInt = Math.floor(Math.random()*(descriptors.length));
        if(randomDescriptors.indexOf(randomInt) === -1) randomDescriptors.push(randomInt);
    }
    this.setState({
      descriptors: [
        descriptors[randomDescriptors[0]],
        descriptors[randomDescriptors[1]],
        descriptors[randomDescriptors[2]],
        descriptors[randomDescriptors[3]]
      ]
    });
  }

  render(){
    const { loadHome, isSmall } = this.state;

    return(
      <StaggerChildren className="Main-Template" pose={loadHome ? 'open' : 'closed'}>
        <div className="Main-Text-Spacer Main-Title-Text Home-Stripe-Override">
          <Title className="stripe OrangeB" pose={loadHome ? 'open' : 'closed'}>
            <InvisOnLoad className="HomeTitle">&nbsp;{this.state.descriptors[0]}.</InvisOnLoad>
          </Title>
          <Title className="stripe RedB" pose={loadHome ? 'open' : 'closed'}>
            <InvisOnLoad className="HomeTitle">&nbsp;{this.state.descriptors[1]}.</InvisOnLoad>
          </Title>
          <Title className="stripe RedOrangeB" pose={loadHome ? 'open' : 'closed'}>
            <InvisOnLoad className="HomeTitle">&nbsp;{this.state.descriptors[2]}.</InvisOnLoad>
          </Title>
          <Title className="stripe BlackB"  pose={loadHome ? 'open' : 'closed'}>
            <InvisOnLoad className="White HomeTitle">
              &nbsp;DEVELOPER.
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
