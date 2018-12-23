import React, { Component } from 'react';

import { StaggerRemaining, StaggerChildren, LoadFade, ChangingLeftRight} from '../poses/poses.js';
import { Services } from "../components/services.js";

const Header = () => (
  <section>
    <LoadFade>
      <h2 className="Title">LETS TALK BUSINESS,<br/>SHALL WE?</h2>
    </LoadFade>

    <LoadFade>
      <div className="Title-Stripe RedOrangeB">
      </div>
    </LoadFade>
  </section>
)


export class Contact extends Component{
  state = { loadHome:false, isSmall:false };

  togglePulse = () => (
    setInterval(() => {this.setState({ isSmall: !this.state.isSmall })}, 3000)
  )
  toggleLoadAnimations = () => (this.setState({ loadHome: true }));
  componentDidMount(){
      window.scrollTo(0, 0);
      setTimeout(this.toggleLoadAnimations, 500);
      setTimeout(this.togglePulse, 850);
  }
  render(){
    const { loadHome, isSmall } = this.state;
    return(
      <div id="Contact">
        <StaggerChildren pose={loadHome ? 'open' : 'closed'}>
          <Header/>
          <LoadFade>
            <h3 className="Large-Font Title-Letter-Spacing Red">
              CONTACT ME
            </h3>
            <h3 className="Medium-Font Title-Letter-Spacing Orange">
              EMAIL: <span className="Black Shrink-Text-Important">DEVDUNCANROCKS@GMAIL.COM</span><br/><br/>
              NETWORK:&nbsp;<a href="https://www.linkedin.com/in/duncan-pierce-079093126" target="_blank" rel="noopener noreferrer" className="Black">LINKEDIN</a><br/><br/>
            </h3>
          </LoadFade>
          <LoadFade>
            <p className="Large-Font Title-Letter-Spacing Red">
              <strong>SERVICES AVAILABLE</strong>
            </p>
            <br/>
          </LoadFade>
          <StaggerRemaining>
          <div className="Flex-Two-Col-Media">
            <Services icon="computer" title="WEB DEV/DESIGN"/>
            <Services icon="device_hub" title="API DEVELOPMENT"/>
            <Services icon="phone_iphone" title="HYBRID MOBILE APPS"/>
            <Services icon="security" title="WEB SECURITY"/>
            <Services icon="visibility" title="UI/UX DEVELOPMENT"/>
            <Services icon="list_alt" title="BUSINESS STRATEGY"/>
          </div>

          <LoadFade>
          <h3 className="Large-Font Title-Letter-Spacing Red">
            WHY NO CONTACT FORM?
          </h3>
          <h3 className="Medium-Font Title-Letter-Spacing Orange">
            OUTSIDE THE <span className="RedOrange">BOX</span>
          </h3>
          <p className="Medium-Font Paragraph-Control">
            Email forms are dull. I have worked with NodeJS platforms such as MJML
            and have built entire companies behind SendGrid, and I have come to the
            conclusion that a generic business structure causes people to lose focus.<br/><br/>
            This is your project you are contacting me for. You aren't just another possible
            client to me - you are my next adventure in code.<br/><br/>
            I am flexible by nature, and recieving an outside of the box, passionate, and personally
            formatted email is something I love. This way, I get to know you, your product, and
            your own goals
          </p>

          <h3 className="Medium-Font Title-Letter-Spacing Orange">
            <ChangingLeftRight pose={isSmall ? 'small' : 'large'}>STATIC SITES</ChangingLeftRight>
          </h3>
          <p className="Medium-Font Paragraph-Control">
            Two words. <span className="Red">JavaScript</span> and <span className="Red">Security</span><br/><br/>
            This site uses purely ReactJS (Gatsby, React Pose, and Good Old-Fashioned DOM JavaScript)
            hosted on Firebase - I wish to keep this site static.
            To put API keys to SendGrid, SMTP Mailer info, or other secure information,
            could be a serious security risk requiring me to upgrade to <span className="Red">ExpressJS</span> or another similar server structure.<br/><br/>
            However, contact forms are not <a href="https://theclick.email" className="Orange" target="_blank" rel="noopener noreferrer">unfamiliar to me</a>
          </p>
          </LoadFade>



          <LoadFade>
            <h3 className="Large-Font Title-Letter-Spacing Red">
              FUN FACT:
            </h3>
          </LoadFade>
          <LoadFade>
            <h3 className="Medium-Font Paragraph-Control Any-Letter-Spacing Center-Text">
              DID YOU KNOW<br/><a href="https://blog.codinghorror.com/why-cant-programmers-program/" className="Orange" target="_blank" rel="noopener noreferrer">90% OF APPLICANTS</a> CANT WRITE FIZZ BUZZ?
              <br/><br/>
            </h3>
          </LoadFade>
          <LoadFade>
            <iframe className="frame Box-Shadow" scrolling='no' title='Rotten Oranges Code Challenge'
             src='//codepen.io/sigkar/embed/qLORvE/?height=265&theme-id=0&default-tab=js,result'
              frameBorder='no' allowtransparency='true'>See the Pen
               <a href='https://codepen.io/sigkar/pen/Neqvpe/'>
               FizzBuzz</a> by Duncan Pierce (
                 <a href='https://codepen.io/sigkar'>@sigkar</a>)
                 on <a href='https://codepen.io'>CodePen</a>.
            </iframe>
          </LoadFade>
        </StaggerRemaining>
        </StaggerChildren>
      </div>
    )
  }
}
