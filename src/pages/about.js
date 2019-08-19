import React, { Component } from 'react';

import DuncanPic from '../images/Me.jpg';

import { StaggerRemaining, StaggerChildren, LoadFade, ZeroToFullWidth, LoadScale} from '../poses/poses.js';

import { TitleText } from "../components/titles.js";


//Just filling in content
const AboutParagraph = () => (
  <section>
    <p className="Medium-Font Paragraph-Width">
      My name is Duncan Pierce. I began developing at a young age
      (15 years old) writing C++.
      At the age of 16, I found out what I wanted to do in life.
      This happened after writing my first responsive website,
      using the (now defunct for flex) Responsive Grid System.
      <br/><br/>
      I took on my first development contract at 18, scrambling to start my own
      business, On-Track Services. Since then, I've worked for a few companies,
      built a few products from the ground up, and have become comfortable taking
      an idea and putting it onto the market.
      <br/><br/>
      I graduated from Bellarmine University in Louisville, Kentucky,
      with a bachelors degree in business administration.
      <br/><br/>
      Why a business degree? Because I believe that understanding the product
      comes first. Business is a knowledge, and a skill. Code is very heavily
      based upon talent, (in some philosophies anyway).

    </p>
  </section>
);
const MissionStatement = () => (
  <section>
    <p className="Medium-Font Paragraph-Width">
      As one who loves technology, I strive to create the best web and mobile applications,
      websites, and back-end systems as I can.
      <br/><br/>
      Developing a professional and sleek UI, with a great UX, is one of the largest selling
      points of any application to a user.
      <br/><br/>
      My dream is to create a great digital experience for the client,
      and the only way to achieve this goal
      is for me to become fluent in both Front and Back End development.

    </p>
  </section>
);

const OffDuty = () => (
  <section>
    <p className="Medium-Font Paragraph-Width">
      <span className="Any-Letter-Spacing Center-Text Orange">
        <strong>
          TECHNOLOGICAL
        </strong>
      </span>
      <br/><br/>
      I am mastery rank 22 on Warframe, I have just a few (300+ each) hours in The Witcher 3 and Fallout 4,
      and I am a total Old-School Runescape geek. Also, development is not just work for me.
      Several hours each day, I look at the latest and greatest UI/UX ideas for both the web
      and mobile applications.
      <br/><br/><br/><br/>
      <span className="Any-Letter-Spacing Center-Text Orange">
        <strong>
          FITNESS
        </strong>
      </span>
      <br/><br/>
      I love to run, mountain bike, hike, and sing. I have been part of unofficial
      olympic weightlifting meets, and spent several years in college powerlifting.
      <br/><br/><br/><br/>
      <span className="Any-Letter-Spacing Center-Text Orange">
        <strong>
          LITTLE BIT OF A HIPSTER
        </strong>
      </span>
      <br/><br/>
        Yeah yeah, I drink organic fair-trade coffee.
      <br/><br/>
        Along with all of this, I have an affinity for old, vintage, and out of place
        things. I make vintage (synthetic) journals, as well as give vintage styles
        a modern touch.
      <br/><br/>
        Soon, I plan on releasing a novel of mine, <em>Frost-striders</em> to the
        general public, a tale of Antarctic colonization in the mid 23rd century.
      <br/><br/><br/><br/>
      <span className="Any-Letter-Spacing Center-Text Orange">
        <strong>
          HARDWARE ROOTS
        </strong>
      </span>
      <br/><br/>
        I'm also a fan of working on hardware. I know the basics of soldering, circuits,
        and I am currently in the process of wiring up a Nixie Tube clock with an
        elixir API remote configuration.
      <br/><br/>
        I also work on gaming PCs, and have slowly been becoming <em>Team Red</em>,
        especially after the release of the RX 5700 XT and the new Ryzen series.
        It's time for some competition!
      <br/><br/>
    </p>
  </section>
)
const Header = () => (
  <section>
    <LoadFade>
      <h2 className="Title">JACK OF ALL TRADES</h2>
    </LoadFade>

      <ZeroToFullWidth className="Title-Stripe RedB"/>
  </section>
)
export class About extends Component{
  state = { loadHome:false };
  toggleLoadAnimations = () => (this.setState({ loadHome: true }));
  componentDidMount(){
      window.scrollTo(0, 0);
      setTimeout(this.toggleLoadAnimations, 500);
  }
  render(){
    const { loadHome } = this.state;



    return(
      <div id="About">
        <StaggerChildren pose={loadHome ? 'open' : 'closed'}>
          <Header/>


          <section id="AboutBlockOne">
            <TitleText title="DREAM STATEMENT" fcol="RedOrange"/>
            <LoadFade>
              <div className="Flex-Items">
                  <MissionStatement/>
              </div>
            </LoadFade>
            </section>
          </StaggerChildren>
          <StaggerRemaining pose={loadHome ? 'open' : 'closed'}>
            <LoadScale>
                <div className="Flex-Items">
                  <img src={DuncanPic} alt="Selfie of Duncan" className="Duncan Box-Shadow"/>
                </div>
            </LoadScale>
            <section id="AboutBlockTwo">
              <TitleText title="YOUNG START" fcol="RedOrange"/>
              <LoadFade>
                <div className="Flex-Items">
                    <AboutParagraph/>
                </div>
              </LoadFade>
            </section>
            <section id="AboutBlockThree">
              <TitleText title="DO YOU DO ANYTHING ELSE?" fcol="RedOrange"/>
              <LoadFade>
                <div className="Flex-Items">
                  <OffDuty/>
                </div>
              </LoadFade>
            </section>
        </StaggerRemaining>
      </div>
    )
  }
}
