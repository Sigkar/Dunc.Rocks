import React from 'react';
import { LoadFade } from '../poses/poses.js';
import MaterialIcon from 'material-icons-react';
export const Services = ({icon, title, service}) => (
  <LoadFade>
    <div className="Icon-With-Text">
      <div className="Black-Icon">
        <div className="Icon-Guttered">
          <MaterialIcon icon={icon} />
          <br/>
          <p className="Center-Text Icon-Title">
            {title}
          </p>
          <br/>
        </div>
      </div>
    </div>
  </LoadFade>
);
