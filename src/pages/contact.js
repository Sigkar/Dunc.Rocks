import React, { Component } from 'react';
import posed from 'react-pose';
import { StaggerRemaining, StaggerChildren, LoadFade, ZeroToFullWidth} from '../poses/poses.js';
import { Services } from "../components/services.js";

const Header = () => (
  <section>
    <LoadFade>
      <h2 className="Title">LETS TALK BUSINESS,<br/>SHALL WE?</h2>
    </LoadFade>

    <LoadFade>
      <div className="Title-Stripe RedOrangeB">
      </div>
    </LoadFade>
  </section>
)

const Form = () => (
  <section>
    <LoadFade>
      <p className="Large-Font Title-Letter-Spacing Red">
        <strong>CONTACT ME</strong>
      </p>
      <br/>
    </LoadFade>
    <LoadFade>
      <form>
        <div className="Seventy-Width Form-Container">
          <br/><br/>
          <p className="Medium-Font Center-Text Black">
            YOUR NAME
          </p>
          <input className="Input-Text" type="text" name="Name" placeholder="EX: Johnson Smithson"/>
          <br/>

          <p className="Medium-Font Center-Text  Black">
            YOUR EMAIL
          </p>
          <input className="Input-Text" type="email" name="Email" placeholder="EX: your@email.here"/>
          <br/>

          <p className="Medium-Font Center-Text  Black">
            MESSAGE
          </p>
          <textarea className="Input-Text" name="message" placeholder="EX: I need a website, iOS, and Android application!"></textarea>
          <br/>
          <div className="Flex-Items">
            <input type="submit" className="Submit-Button White" value="SUBMIT"/>
          </div>
          <br/>
        </div>
      </form>
    </LoadFade>
  </section>
)

export class Contact extends Component{
  state = { loadHome:false };
  toggleLoadAnimations = () => (this.setState({ loadHome: true }));
  componentDidMount(){
      window.scrollTo(0, 0);
      setTimeout(this.toggleLoadAnimations, 500);
  }
  render(){
    const { loadHome } = this.state;
    return(
      <div id="Contact">
        <StaggerChildren pose={loadHome ? 'open' : 'closed'}>
          <Header/>
          <Form/>
          <LoadFade>
            <p className="Large-Font Title-Letter-Spacing Red">
              <strong>SERVICES AVAILABLE</strong>
            </p>
            <br/>
          </LoadFade>
          <StaggerRemaining>
          <div className="Flex-Break">
            <Services icon="computer" title="WEB DEVELOPMENT"/>
            <Services icon="device_hub" title="API DEVELOPMENT"/>
            <Services icon="phone_iphone" title="MOBILE APPLICATIONS"/>
          </div>
          <div className="Flex-Break">
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
