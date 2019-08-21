import React from "react";

class IntroText extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentText: "Duncan Pierce"
    }
    this.setCenteredText = this.setCenteredText.bind(this);
  }

  awaitPromise = (length) => {
    return new Promise((resolve) => {
      setTimeout(resolve.bind(null), length);
    })
  }

  async componentDidMount(){
    await this.awaitPromise(2000)
    this.setCenteredText();
  }
  async setCenteredText(){
    
    let timingInterval = 3000;
    let counter = 1;
    let centeredTextInterval = setInterval(
      ()=>{
        this.setState({currentText: terms[counter]})
        if(counter < terms.length){
          counter++;
          timingInterval = timingInterval/5;
        }
        if(counter === terms.length){
          clearInterval(centeredTextInterval);
        }
      }
    , timingInterval/(counter^25))
  }

  render(){
    return(
      <div style={{
        width: `100vw`,
        height: `100vh`,
        position: `fixed`,
        top: `0px`,
        left: `0px`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        backgroundColor:`white`,
        zIndex:`1000000`
      }}>
        <h1 style={{
          fontSize:`calc(40px + 6 * ((100vw - 320px) / 680))`,
          wordBreak: `letter`,
          textAlign:`center`
        }}>{this.state.currentText.toUpperCase()}</h1>
      </div>
    )
  }
}

const terms = [
  "Developer",
  "Designer", "Breadboarder",
  "Hardware engineer", "Web Connoisseur",
  "React", "Vue", "Rust", "Typescript",
  "Dart", "C++", "Ruby", "Rails", "PHP",
  "Laravel", "MongoDB", "SQL", "Node",
  "Assembly", "REST",
  "Brother", "Traveler", "Leatherworker",
  "Partner", "Florida Man", "Viking",
  "Giant", "Coffee Addict", "Soldering noob",
  "Hipster", "Goofball", "Retrophile",
  "Geek", "Gamer", "Indie junkie",
  "Nerd", "Human",
]

export default IntroText;