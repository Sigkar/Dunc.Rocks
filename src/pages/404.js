import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const NotFound = () => (
  <div>

    <div className="Center-Screen Any-Letter-Spacing Medium-Font">
      <h3 className="Center-Text Large-Font Orange">
        404<br/>
        <a href="/" className="RedOrange Center-Text Medium-Font">Back Home</a>
      </h3>
      <blockquote cite="">
        All that is gold does not glitter,<br/>
        <span className="RedOrange">Not all those who wander are lost;</span><br/>
        The old that is strong does not wither,<br/>
        Deep roots are not reached by the frost.<br/>
        From the ashes, a fire shall be woken,<br/>
        A light from the shadows shall spring;<br/>
        Renewed shall be blade that was broken,<br/>
        The crownless again shall be king.<br/>
        <br/>
        <h3 className="Title Very-Small-Font">
          <span className="Red">Tolkien, J.R.R.</span> The Fellowship of the Ring.
          <br/>New York: Houghton Mifflin Company, 1994. Print.
        </h3>
      </blockquote>

    </div>

  </div>
)
