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
const Item = ({content, pluginOne, example, linkTitle}) => (
  <div class="Lang">
    <p class="Large-Font Center-Text"><strong>{content}</strong></p>
    <br/>
    <p class="Large-Font Center-Text">{pluginOne}</p>
    <br/>
    <p class="Large-Font Center-Text"><a className="RedOrange" target="_blank" href={example}>{linkTitle}</a></p>
  </div>
);

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
            <div className="Title-Stripe RedB Fifty-Width">
            </div>
          </LoadFade>
          </StaggerChildren>
          <StaggerRemaining pose={loadHome ? 'open' : 'closed'}>
            <LoadFade>
              <h3 className="Large-Font Title-Letter-Spacing">
                WHO AM I?
              </h3>
            </LoadFade>

            <LoadFade>

              <div className="Flex-Items">
                <div className="Space">
                </div>

                <p className="Medium-Font Justify">
                  My name is Duncan Pierce. I began developing at the ripe young age
                  of 15 years old, writing my first responsive website, using the
                  Responsive Grid System.
                  <br/><br/>
                  <div className="Center-Text">&mdash;</div>
                  <br/>
                  I graduated from Bellarmine University in Louisville, Kentucky,
                  with a bachelors degree in business administration.
                  <br/><br/>
                  My dream is to create a great digital experience for both the
                  client and the developer, and the only way to achieve this goal
                  was for me to become fluent in both Front and Back End development.
                </p>

                <div className="Space">
                </div>
              </div>
            </LoadFade>

            <LoadFade>
              <div className="Title-Stripe RedOrangeB Sixty-Width">
              </div>
            </LoadFade>

            <LoadFade>
            <br/>
            <h3 className="Large-Font Title-Letter-Spacing">
              FEATURED CODE
            </h3>
            </LoadFade>

            <div class="Flex-Items">
              <LoadFade>
                <Item content="JavaScript" pluginOne="ReactJS" example="/home" linkTitle="This Website"/>
              </LoadFade>
              <LoadFade>
                <Item content="PHP" pluginOne="Laravel" example="https://theclick.email" linkTitle="The Click"/>
              </LoadFade>
              <LoadFade>
                <Item content="JavaScript" pluginOne="TailorMade" example="https://github.com/Sigkar/tailormade/blob/master/scripts/tailormade.js" linkTitle="Git Source"/>
              </LoadFade>
            </div>
        </StaggerRemaining>
      </div>
    )
  }
}
