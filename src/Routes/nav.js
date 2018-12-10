import React, { Component } from 'react';
import posed from 'react-pose';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Home } from "../pages/home.js";
import { Contact } from "../pages/contact.js";
import { Work } from "../pages/work.js";
import { About } from "../pages/about.js";

import MaterialIcon, {colorPalette} from 'material-icons-react';


const IndexPage = () => <Home />;
const AboutPage = () => <About />;
const ContactPage = () => <Contact />;
const MyWorkPage = () => <Work />;



const Sidebar = posed.ul({
  open: {
    x: '0%',
    delayChildren: 200,
    staggerChildren: 50,
  },
  draggable:'x',
  drag: {
    scale: 1
  },
  dragEnd: {
    x: '200%',
    y: 0,
    transition: {
      type: 'spring'
     }
  },
  closed: { x: '100%', delay: 300 }
});

const NavOption = posed.li({
  open: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 200
    }
  },
  pressable: true,
  hoverable: true,
  hover: {
    scale: 0.95
  },
  init: { scale: 1 },
  press: { scale: 0.9 },
  closed: { y: 40, opacity: 0 },
});
const MyLink = ({ title, to, onClick, routes }) => (
  <div>
    <Link to={to}>
      <NavOption className="item" onClick={onClick}>
         <span className="Nav-Font">{title}</span>
      </NavOption>
    </Link>
  </div>
);


const FuncIcon = ({ size, funcOption, icon, classVal }) => (
    <div className={classVal}>
      <MaterialIcon icon={icon} onClick={funcOption} size={size} />
    </div>
)

export class App extends Component {
  state = { isOpen: false, finishedLoad: false };
    completedLoad = () => this.setState({ finishedLoad: true });

    componentDidMount() {
      setTimeout(this.completedLoad, 2000);

    }

    toggle = () => (this.state.isOpen ? this.setState({ isOpen: false }) : this.setState({ isOpen: true }));
    render() {
      const { isOpen } = this.state;

      return (
        <div>
          <Router>
            <div id="Nav-Contain-ID">

              <Route path="/" exact component={IndexPage}  />
              <Route path="/about/" component={AboutPage} />
              <Route path="/contact/" component={ContactPage} />
              <Route path="/mywork/" component={MyWorkPage} />

              <FuncIcon size='large' funcOption={this.toggle} icon="menu" classVal="clickable"/>

              <Sidebar className="sidebar" pose={isOpen ? 'open' : 'closed'}>
                <MyLink title="HOME" to="/" onClick={this.toggle}/>
                <MyLink title="ABOUT" to="/about" onClick={this.toggle}/>
                <MyLink title="CONTACT" to="/contact" onClick={this.toggle}/>
                <MyLink title="MY WORK" to="/mywork" onClick={this.toggle}/>
              </Sidebar>

            </div>
          </Router>
        </div>
      );
    }
}
