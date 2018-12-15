import React, { Component } from 'react';
import { StaggerRemaining, StaggerChildren, LoadFade, ZeroToFullWidth} from '../poses/poses.js';
import MaterialIcon, {colorPalette} from 'material-icons-react';
export const Services = ({icon, title, service}) => (
  <LoadFade>
    <div class="Icon-With-Text">
      <div className="Black-Icon">
        <div className="One-Third-Guttered">
          <MaterialIcon icon={icon} size="80" />
          <br/>
          <p className="Center-Text Medium-Font">
            {title}
            <br/><br/>
            {service}
          </p>
          <br/>
        </div>
      </div>
    </div>
  </LoadFade>
);
