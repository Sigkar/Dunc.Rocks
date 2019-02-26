import React, { Component } from 'react';
import {LoadFade} from '../poses/poses.js';
import "./components.css";

export class Featured extends Component{
  render(){
    return(
      <LoadFade>
        <h2 className="Medium-Font Center-Text Black">{this.props.proj}</h2>
        <div className="Product-Feature Box-Shadow-Hover">
          <div className="Product-Image">
            <a href={this.props.link} target="_blank" rel="noopener noreferrer">
              <img src={this.props.logo} alt={this.props.altText} />
            </a>
          </div>
        </div>
        
        <h2 className="Small-Font Center-Text Red">{this.props.myRole}</h2>
        <p className="Small-Font Center-Text">{this.props.cycle}</p>
        <p className="Small-Font Center-Text">
          <a className="Black" href={this.props.codeLink} target="_blank" rel="noopener noreferrer">
            {this.props.lang}
          </a>
        </p>
      </LoadFade>
    )
  };
}
