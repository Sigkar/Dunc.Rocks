import React, { Component } from 'react';
import {LoadFade} from '../poses/poses.js';
import "./components.css";

export class Featured extends Component{
  render(){
    return(
      <LoadFade>
        <div className="Product-Image">
          <a href={this.props.link} target="_blank" rel="noopener noreferrer">
            <img src={this.props.logo} alt={this.props.altText} className="Box-Shadow Box-Shadow-Hover"/>
          </a>
        </div>
        <p className="Any-Letter-Spacing Center-Text Large-Font RedOrange">
          {this.props.release}
        </p>
        <p className="Center-Text Medium-Font Orange">
          {this.props.role}
        </p>
        <div className="Product-Text Medium-Font">
          <p>{this.props.description}</p>
        </div>
        <div class="Flex-Products Medium-Font">
          <h5 className="Product-Third">{this.props.writtenIn}</h5>
          <h5 className="Product-Third">{this.props.server}</h5>
          <h5 className="Product-Third">{this.props.codebase}</h5>
        </div>
      </LoadFade>
    )
  };
}
