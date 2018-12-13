import React, { Component } from 'react';
import posed from 'react-pose';
import { StaggerRemaining, StaggerChildren, LoadFade, ZeroToFullWidth} from '../poses/poses.js';

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
        <ZeroToFullWidth>
          <div className="Title-Stripe OrangeB">
          </div>
        </ZeroToFullWidth>

      </StaggerChildren>
    )
  }
}
