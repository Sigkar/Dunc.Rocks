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
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = { loadHome:false, isSmall:false };
  togglePulse = () => (
    setInterval(() => {this.setState({ isSmall: !this.state.isSmall })}, 3000)
  )
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

  handleNameChange(event) {
    this.setState({name: event.target.name});
  }
  handleEmailChange(event) {
    this.setState({email: event.target.email});
  }
  handleMessageChange(event) {
    this.setState({message: event.target.message});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
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
              <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange} />
              <input type="email" name="email" value={this.state.email} onChange={this.handleEmailChange} />
              <textarea name="message" value={this.state.message} onChange={this.handleMessageChange}>
              </textarea>
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
