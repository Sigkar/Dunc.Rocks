import React, { Component } from 'react';

import { StaggerRemaining, StaggerChildren, LoadFade, ZeroToFullWidth} from '../poses/poses.js';
import { Featured } from '../components/features.js';

import TheClick from "../images/theClick.png";
import Headlinerr from "../images/headlinerr.png";
import FrostStrider from "../images/FSLogo.jpg";
import Placeholder from "../images/FF4D00-0.0.png";

const Header = () => (
  <section>
    <LoadFade>
      <h2 className="Title">CONTRACTOR AND<br/>FREELANCE WORK</h2>
    </LoadFade>
    <ZeroToFullWidth>
      <div className="Title-Stripe OrangeB">
      </div>
    </ZeroToFullWidth>
  </section>
)

const GitAndCodePen = () => (
  <section id="GitAndPen">
    <LoadFade>
      <h2 className="Title RedOrange">
        AN INDUSTRY STANDARD
      </h2>
    </LoadFade>
    <LoadFade>
      <div className="Flex-Items">
      <span className="Medium-Font Paragraph-Width">
        Check out my Github and CodePen to see what I'm doing currently!
        <br/><br/>
        If you don't see what you need on my profile, ask anyway!
        I am open to learning new technologies,
        and I have several connections I can forward you to.
        <br/><br/>
        <div className="Flex-Items">
          <a href="https://github.com/sigkar" target="_blank" rel="noopener noreferrer">
            <button className="Link-Button BlackB Hover-Red">GITHUB</button>
          </a>
          <br/>
          <a href="https://codepen.io/sigkar/" target="_blank" rel="noopener noreferrer">
            <button className="Link-Button RedOrangeB Hover-Red">CODEPEN</button>
          </a>
        </div>
        <div className="Break-Padding"></div>
      </span>
      </div>
    </LoadFade>
  </section>
);

export class Work extends Component{
  state = { loadHome:false };
  toggleLoadAnimations = () => (this.setState({ loadHome: true }));

  componentDidMount(){
      setTimeout(this.toggleLoadAnimations, 500);

  }

  render(){
    const { loadHome } = this.state;
    return(
      <section id="MyWork">
        <StaggerChildren pose={loadHome ? 'open' : 'closed'}>
          <Header/>
          <StaggerRemaining>
          <LoadFade>
            <h2 className="Title Orange">PREVIOUS WORK AND CURRENT PROJECTS</h2>
          </LoadFade>
          <div className="Products">
              <Featured
                logo={TheClick}
                proj="THECLICK"
                altText="The Click Logo"
                link="https://theclick.email"
                myRole="FULLSTACK DEV"
                cycle="RELEASED"
                lang="LARAVEL"
                codeLink="https://github.com/Sigkar/Guzzle-Sendgrid-Layer/blob/master/SendEmail.php"
                />
              <Featured
                logo={Headlinerr}
                proj="HEADLINERR"
                altText="Headlinerr Logo"
                link="https://headlinerr.com"
                myRole="OWNER/OPERATOR"
                cycle="IN DEVELOPMENT"
                lang="REACTJS/FIREBASE"
                codeLink="https://github.com/Sigkar/Headlinerr"
              />
              <Featured
                logo={FrostStrider}
                proj="FROSTSTRIDERS"
                link="https://froststrider.com"
                altText="GroupieTech Logo"
                myRole="DEVELOPER - MECHANICS"
                cycle="IN DEVELOPMENT"
                lang="UNITY3D"
              />
              <Featured
                logo={Placeholder}
                proj="UP NEXT"
                altText="Coming Soon"
                link="https://dunc.rocks/contact"
                myRole="GET ON THIS WALL"
                cycle="CONTACT ME"
                lang="&nbsp;"
              />
            </div>
          <GitAndCodePen/>
          </StaggerRemaining>
        </StaggerChildren>
      </section>
    )
  }
}
