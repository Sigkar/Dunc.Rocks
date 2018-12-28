import React, { Component } from 'react';

import { StaggerRemaining, StaggerChildren, LoadFade, ZeroToFullWidth} from '../poses/poses.js';
import { Services } from "../components/services.js";

import firebase from "firebase/app";
import "firebase/database";

import "../checkbox.css";

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
    this.baseState = this.state;


    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillUnmount() {
    console.log("To do - unbind submissions");
  }

  toggleLoadAnimations = () => (this.setState({ loadHome: true }));

  resetForm = () => {
    this.setState(this.baseState)
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
    // eslint-disable-next-line
    const email = target.email;

    this.setState({
      [name]: value
    });
  }
  validateEmail(email) {
    // eslint-disable-next-line
    var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    return re.test(email);
  }
  escapeRegExp(string){
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
  }
  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    var keyMap = [this.state.name, this.state.email, this.state.message];
    // Validate
    if (typeof keyMap[0] == 'undefined' || typeof keyMap[1] == 'undefined' || typeof keyMap[2] == 'undefined' ) {
      return false;
    }
    if(!this.validateEmail(this.state.email)){
      return false;
    }
    if(!this.state.hasAgreed){
      return false;
    }
    if (keyMap[0] === '' || keyMap[1] === '' || keyMap[2] === '' || !keyMap[0] || !keyMap[1] || !keyMap[2] ) {
      return false;
    }
    for(var i = 0; i < keyMap.length; i++){
      keyMap[i] = this.escapeRegExp(keyMap[i]);
    };
    // Prep object to send to firebase
    var object = {
      name: keyMap[0],
      email: keyMap[1],
      hasagreed: this.state.hasAgreed,
      message: keyMap[2],
      time: firebase.database.ServerValue.TIMESTAMP
    }
    firebase.database().ref("/submissions").push().set(object);
    // Clear state
    this.setState({
      name: '',
      message: '',
      email: '',
      hasAgreed: false
    });
    this.handleInputChange(event);
  }

  render(){
    const { loadHome } = this.state;
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
          <hr/>
          <h3 className="Large-Font Title-Letter-Spacing RedOrange">
            DROP ME A NOTE
          </h3>
            <form
              onKeyDown={(e) => {if (e.key === 'Enter') {e.preventDefault();}}}
              onSubmit={this.handleSubmit.bind(this)}
            >

            <div className="Paragraph-Control">
              <label>
                <span className="Any-Letter-Spacing Medium-Font">NAME OR ORGANIZATION:</span><br/>
                <input
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  className="Text-Input"
                  required/>
              </label>
              <br/><br/>
              <label>
                <span className="Any-Letter-Spacing Medium-Font">EMAIL:</span><br/>
                <input
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  className="Text-Input"
                  required
                />
              </label>
              <br/><br/>
              <label>
                <span className="Any-Letter-Spacing Medium-Font">YOUR MESSAGE:</span><br/>
                <textarea className="Text-Input" name="message" value={this.state.message} onChange={this.handleInputChange} required>
                </textarea>
              </label>
              <br/><br/>
              <label>
                <span className="Any-Letter-Spacing Medium-Font">CONTACT TERMS AGREEMENT</span><br/>
                <ul>
                  <li>
                    Duncan Pierce (Developer) maintains the right to reject any project, task, or request, even after signing an NDA.
                  </li>
                  <br/>
                  <li>
                    The Developer is required by United States and International law to report all illegal activity, including requests, even under the binding of an NDA.
                  </li>
                  <br/>
                  <li>
                    I (The User) agree to not to misuse this input form to send unrelated emails, contact the Developer outside of the project, or for malicious intent.
                  </li>
                </ul>
                <div className="control-group Flex-Items">
                  <div className="control control-checkbox">
                    <input name="hasAgreed" type="checkbox" required checked={this.state.hasAgreed} onChange={this.handleInputChange}/>
                    <div className="control_indicator"></div>
                  </div>
                </div>
              </label>
              <br/><br/><br/>
                <input className="Button-Input RedB White" type="submit" value="SUBMIT"/>
              </div>

            </form>
          </LoadFade>
          <LoadFade>
          <hr/>
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
