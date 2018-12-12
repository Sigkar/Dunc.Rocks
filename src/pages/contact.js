import React, { Component } from 'react';
import posed from 'react-pose';
import { StaggerRemaining, StaggerChildren, LoadFade, ZeroToFullWidth} from '../poses/poses.js';


const Header = () => (
  <section>
    <LoadFade>
      <h2 className="Title">LETS TALK</h2>
    </LoadFade>

    <LoadFade>
      <div className="Title-Stripe RedB">
      </div>
    </LoadFade>
  </section>
)

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
          <Header/>
          <LoadFade>
          <LoadFade>
            <h3 className="Large-Font Title-Letter-Spacing">
              HERES MY HOMEWORK
            </h3>
          </LoadFade>
          <LoadFade>
            <h3 className="Medium-Font Center-Text">
              ROTTEN ORANGES
            </h3>
          </LoadFade>
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
