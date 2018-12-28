import React, { Component } from 'react';

import { StaggerRemaining, StaggerChildren, LoadFade, ZeroToFullWidth} from '../poses/poses.js';
import { Services } from "../components/services.js";
import firebase from "firebase/app";
import "firebase/database";
/*
<form action="https://formspree.io/devduncanrocks@gmail.com" method="POST">
  <input type="text" name="name"/>
  <input type="email" name="email"/>
  <textarea name="message"></textarea>
  <input type="submit"/>
</form>
*/
// function sendContactForm(object){
//   firebase.database().ref("/submissions").push().set(object);
// }

const Header = () => (
  <section>
    <LoadFade>
      <h2 className="Title">LETS TALK BUSINESS,<br/>SHALL WE?</h2>
    </LoadFade>

    <ZeroToFullWidth>
      <div className="Title-Stripe RedOrangeB">
      </div>
    </ZeroToFullWidth>
  </section>
)

export class Contact extends Component{
  state = { loadHome:false, isSmall:false };
  togglePulse = () => (
    setInterval(() => {this.setState({ isSmall: !this.state.isSmall })}, 3000)
  )

  constructor(props) {
    super(props);
    this.state = {
      hasAgreed: false,
      name: '',
      email: '',
      message: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleLoadAnimations = () => (this.setState({ loadHome: true }));

  generateContactObject = () => (console.log(this.state.email));

  componentWillMount(){
    const config = {
      apiKey: "AIzaSyDP_thhJKydd9oGN-VwnUipSV6GJV8pzi0",
      databaseURL: "https://duncanrocks.firebaseio.com/",
      projectId: "duncanrocks"
    };
    firebase.initializeApp(config);
  }

  componentDidMount(){
      window.scrollTo(0, 0);
      setTimeout(this.toggleLoadAnimations, 500);
      setTimeout(this.togglePulse, 850);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const email = target.email;

    this.setState({
      [name]: value
    });
  }
  escapeRegExp(string){
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }
  handleSubmit(event) {
    var keyMap = [this.state.name, this.state.email, this.state.message];
    for(var i = 0; i < keyMap.length; i++){
      keyMap[i] = this.escapeRegExp(keyMap[i]);
      console.log(keyMap[i]);
    };

    var object = {
      name: keyMap[0],
      email: keyMap[1],
      hasagreed: this.state.hasAgreed,
      message: keyMap[2]
    }
    firebase.database().ref("/submissions").push().set(object);
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
            <form
              onKeyDown={(e) => {if (e.key === 'Enter') {e.preventDefault();}}}
              onSubmit={(e) => {e.preventDefault();e.stopPropagation();}}
            >
            <div className="Paragraph-Control">
              <label>
                <span className="Any-Letter-Spacing">NAME OR ORGANIZATION:</span><br/>
                <input
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
              </label>
              <br/><br/>
              <label>
                <span className="Any-Letter-Spacing">EMAIL:</span><br/>
                <input
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </label>
              <br/><br/>
              <label>
                <span className="Any-Letter-Spacing">YOUR MESSAGE:</span><br/>
                <textarea name="message" value={this.state.message} onChange={this.handleInputChange}>
                </textarea>
              </label>
              <br/><br/>
              <label>
                <span className="Any-Letter-Spacing">I AGREE TO THE TERMS BELOW</span><br/>
                <ul>
                  <li>
                    Duncan Pierce (Developer, I, We) maintains the right to reject any project, task, or request, even after signing an NDA
                  </li>
                  <li>
                    The Developer is required by law to report all illegal activity, including requests, even under the binding of an NDA
                  </li>
                  <li>
                    I agree to not to misuse this input form to send unrelated emails, contact the Developer outside of the project, or for malicious intent.
                  </li>
                </ul>
                <input name="hasAgreed" type="checkbox" checked={this.state.hasAgreed} onChange={this.handleInputChange} />
              </label>
              <br/><br/>
                <button onClick={this.handleSubmit}>
                SUBMIT
                </button>
              </div>
            </form>
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
