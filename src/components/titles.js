import React, { Component } from 'react';

import { StaggerRemaining, StaggerChildren, LoadFade, ZeroToFullWidth} from '../poses/poses.js';

export const HalfTitle = ({title, bgcol, right}) => (
    <LoadFade>
      <div className={"Full-Stripe BlackB Box-Shadow " + right}>
        <h3 className={"Large-Font Any-Letter-Spacing Fifty-Width-Media Text-Stripe Center-Text Line-Center  " + bgcol }>
          {title.toUpperCase()}
        </h3>
      </div>
    </LoadFade>
);
export const TitleText = ({title, fcol}) => (
  <LoadFade>
    <h3 className={"Large-Font Title-Letter-Spacing " + fcol}>
      {title.toUpperCase()}
    </h3>
  </LoadFade>
);
