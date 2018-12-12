import React, { Component } from 'react';

import DuncanPic from '../images/DuncanCompress.jpg';

import posed from 'react-pose';


import MaterialIcon, {colorPalette} from 'material-icons-react';


import { StaggerRemaining, StaggerChildren, LoadFade, ZeroToFullWidth} from '../poses/poses.js';
// JSX
const Item = ({content, pluginOne, example, linkTitle}) => (
  <div class="Lang">
    <p class="Large-Font Center-Text"><strong>{content}</strong></p>
    <br/>
    <p class="Large-Font Center-Text">{pluginOne}</p>
    <br/>
    <p class="Large-Font Center-Text"><a className="RedOrange" target="_blank" rel="noopener noreferrer" href={example}>{linkTitle}</a></p>
  </div>
);

const Services = ({icon, title, service}) => (
  <LoadFade>
    <div className="Black-Icon">
      <div className="One-Third-Guttered">
        <MaterialIcon icon={icon} size="80" />
        <br/>
        <p className="Center-Text Medium-Font">
          {title}
          <br/><br/>
          {service}
        </p>
        <br/>
      </div>
    </div>
  </LoadFade>
);

//Just filling in content
const AboutParagraph = () => (
  <section>
    <p className="Medium-Font Justify Paragraph-Width">
      My name is Duncan Pierce. I began developing at the young age
      of 15 years old, writing C++.
      At the age of 16, I found out what I wanted to do in life.
      This happened after writing my first responsive website,
      using the (now defunct for flex) Responsive Grid System.
      <br/><br/>
      I graduated from Bellarmine University in Louisville, Kentucky,
      with a bachelors degree in business administration.
      <br/><br/>
      Why a business degree? Because I believe that understanding the product
      comes first. Business is a knowledge and skill - Code is very heavily
      based upon talent, in some philosophies anyway.
    </p>
  </section>
);
const MissionStatement = () => (
  <section>
    <p className="Medium-Font Justify Paragraph-Width">
      As one who loves technology, I strive to create the best web and mobile applications,
      websites, and back-end systems as I can.
      <br/><br/>
      Developing a professional and sleek UI, with a great UX, is one of the largest selling
      points of any application.
      <br/><br/>
      My dream is to create a great digital experience for both the
      client and the developer, and the only way to achieve this goal
      was for me to become fluent in both Front and Back End development.
    </p>
  </section>
);

const Header = () => (
  <section>
    <LoadFade>
      <h2 className="Title">EVER SEEN A&nbsp;
      <span class="RedOrange">U</span>
      <span class="Orange">N</span>
      <span class="Red">I</span>
      <span class="RedOrange">C</span>
      <span class="Orange">O</span>
      <span class="Red">R</span>
      <span class="RedOrange">N</span>
      ?</h2>
      <h2 className="Title">NOW YOU HAVE.</h2>
    </LoadFade>

      <ZeroToFullWidth className="Title-Stripe RedB"/>
  </section>
)
export class About extends Component{
  state = { loadHome:false };
  toggleLoadAnimations = () => (this.setState({ loadHome: true }));
  componentDidMount(){
      setTimeout(this.toggleLoadAnimations, 500);
  }
  render(){
    const { loadHome } = this.state;



    return(
      <div id="About">
        <StaggerChildren pose={loadHome ? 'open' : 'closed'}>
          <Header/>

          <LoadFade>
              <div className="Flex-Items">
                <img src={DuncanPic} alt="Selfie of Duncan" className="Duncan Box-Shadow"/>
              </div>
          </LoadFade>

          </StaggerChildren>
          <StaggerRemaining pose={loadHome ? 'open' : 'closed'}>

            <LoadFade>
              <br/>
              <h3 className="Large-Font Title-Letter-Spacing">
                DREAM STATEMENT
              </h3>
            </LoadFade>

            <LoadFade>
              <div className="Flex-Items">
                <div className="Space">
                </div>

                  <MissionStatement/>

                <div className="Space">
                </div>
              </div>
            </LoadFade>

            <LoadFade>
              <h3 className="Large-Font Title-Letter-Spacing">
                YOUNG START
              </h3>
            </LoadFade>

            <LoadFade>
              <div className="Flex-Items">
                <div className="Space">
                </div>

                  <AboutParagraph/>

                <div className="Space">
                </div>
              </div>
            </LoadFade>



            <LoadFade>
              <p className="Large-Font Title-Letter-Spacing">
                <strong>SERVICES AVAILABLE</strong>
              </p>
            </LoadFade>
            <div className="Flex-Items">
              <Services icon="computer" title="WEB DEVELOPMENT"/>
              <Services icon="device_hub" title="API DEVELOPMENT"/>
              <Services icon="phone_iphone" title="MOBILE APPLICATIONS"/>
            </div>
            <div className="Flex-Items">
              <Services icon="security" title="WEB SECURITY"/>
              <Services icon="visibility" title="UI/UX DEVELOPMENT"/>
              <Services icon="list_alt" title="BUSINESS STRATEGY"/>
            </div>

        </StaggerRemaining>
      </div>
    )
  }
}
// <div class="Flex-Items">
//   <LoadFade>
//     <Item content="JavaScript" pluginOne="ReactJS" example="/home" linkTitle="This Website"/>
//   </LoadFade>
//   <LoadFade>
//     <Item content="PHP" pluginOne="Laravel" example="https://theclick.email" linkTitle="The Click"/>
//   </LoadFade>
//   <LoadFade>
//     <Item content="JavaScript" pluginOne="TailorMade" example="https://github.com/Sigkar/tailormade/blob/master/scripts/tailormade.js" linkTitle="Git Source"/>
//   </LoadFade>
// </div>
