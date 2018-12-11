import React, { Component } from 'react';

import DuncanPic from '../images/DuncanCompress.jpg';

import posed from 'react-pose';

//React Pose
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

const GridItems = ({con1, col1, con2, col2, con3, col3, con4, col4}) => (
  <div className="Flex-Items">
    <LoadFade>
      <div className={"Grid-4 Center-Text Medium-Font " + col1}>
        {con1}
      </div>
    </LoadFade>
    <LoadFade>
      <div className={"Grid-4 Center-Text Medium-Font " + col2}>
        {con2}
      </div>
    </LoadFade>
    <LoadFade>
      <div className={"Grid-4 Center-Text Medium-Font " + col3}>
        {con3}
      </div>
    </LoadFade>
    <LoadFade>
      <div className={"Grid-4 Center-Text Medium-Font " + con4}>
        {con4}
      </div>
    </LoadFade>
  </div>
)

//Just filling in content
const AboutParagraph = () => (
  <section>
    <p className="Medium-Font Justify">
      My name is Duncan Pierce. I began developing at the young age
      of 15 years old, writing C++.
      At the age of 16, I found out what I wanted to do in life,
      after writing my first responsive website, using the Responsive Grid System.
      <br/><br/>
      I graduated from Bellarmine University in Louisville, Kentucky,
      with a bachelors degree in business administration.
      <br/><br/>
    </p>
  </section>
);
const MissionStatement = () => (
  <section>
    <p className="Medium-Font Justify">
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
      <h2 className="Title">NOW YOU HAVE</h2>
    </LoadFade>

    <LoadFade>
      <div className="Title-Stripe RedB">
      </div>
    </LoadFade>
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
