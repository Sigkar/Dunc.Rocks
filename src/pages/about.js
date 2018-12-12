import React, { Component } from 'react';

import DuncanPic from '../images/DuncanCompress.jpg';

import posed from 'react-pose';


import MaterialIcon, {colorPalette} from 'material-icons-react';


import { StaggerRemaining, StaggerChildren, LoadFade, ZeroToFullWidth, LoadScale} from '../poses/poses.js';
// JSX
const Item = ({content, pluginOne, example, linkTitle}) => (
  <div className="Lang">
    <p className="Large-Font Center-Text"><strong>{content}</strong></p>
    <br/>
    <p className="Large-Font Center-Text">{pluginOne}</p>
    <br/>
    <p className="Large-Font Center-Text"><a className="RedOrange" target="_blank" rel="noopener noreferrer" href={example}>{linkTitle}</a></p>
  </div>
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
      <span className="RedOrange">U</span>
      <span className="Orange">N</span>
      <span className="Red">I</span>
      <span className="RedOrange">C</span>
      <span className="Orange">O</span>
      <span className="Red">R</span>
      <span className="RedOrange">N</span>
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

          <LoadScale>
              <div className="Flex-Items">
                <img src={DuncanPic} alt="Selfie of Duncan" className="Duncan Box-Shadow"/>
              </div>
          </LoadScale>

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

        </StaggerRemaining>
      </div>
    )
  }
}
// <div className="Flex-Items">
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
