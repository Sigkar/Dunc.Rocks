import React, { Component } from 'react';
import posed from 'react-pose';
const StaggerRemaining = posed.div({
  open:{
    staggerChildren: 50,
    delayChildren: 750
  }
});
const StaggerChildren = posed.div({
  open:{
    staggerChildren: 250,
    delayChildren: 100
  }
});
const LoadFade = posed.div({
  open: {
    opacity:1,
    transition:{
      duration:400,
    }
  },
  closed:{
    opacity:0,
  }
});

export class Work extends Component{
  state = { loadHome:false };
  toggleLoadAnimations = () => (this.setState({ loadHome: true }));
  componentDidMount(){
      setTimeout(this.toggleLoadAnimations, 500);
  }

  render(){
    const { loadHome } = this.state;
    return(
      <StaggerChildren pose={loadHome ? 'open' : 'closed'}>
        <LoadFade>
          <h2 className="Title">FREELANCE AND</h2>
          <h2 className="Title">CONTRACT WORK</h2>
        </LoadFade>
        <LoadFade>
          <div className="Title-Stripe RedOrangeB">
          </div>
        </LoadFade>

      </StaggerChildren>
    )
  }
}
