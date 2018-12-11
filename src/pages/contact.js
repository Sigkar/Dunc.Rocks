import React, { Component } from 'react';
import posed from 'react-pose';

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
export class Contact extends Component{
  state = { loadHome:false };
  toggleLoadAnimations = () => (this.setState({ loadHome: true }));
  componentDidMount(){
      setTimeout(this.toggleLoadAnimations, 500);
  }
  render(){
    const { loadHome } = this.state;
    return(
      <div id="Contact">
        <StaggerChildren pose={loadHome ? 'open' : 'closed'}>
          <LoadFade>
            <h1> Contact </h1>
            <iframe className="frame" scrolling='no' title='Rotten Oranges Code Challenge'
             src='//codepen.io/sigkar/embed/Neqvpe/?height=265&theme-id=0&default-tab=js,result'
              frameborder='no' allowtransparency='true'
               allowfullscreen='true' >See the Pen <a href='https://codepen.io/sigkar/pen/Neqvpe/'>Rotten Oranges Code Challenge</a> by Duncan Pierce (<a href='https://codepen.io/sigkar'>@sigkar</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
          </LoadFade>
        </StaggerChildren>
      </div>
    )
  }
}
