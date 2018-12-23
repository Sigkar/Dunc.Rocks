import React from 'react';

import { LoadFade } from '../poses/poses.js';

export const HalfTitle = ({title, bgcol, right}) => (
    <LoadFade>
      <div className={"Full-Stripe BlackB Box-Shadow " + right}>
        <h3 className={"Large-Font Any-Letter-Spacing Fifty-Width-Media Text-Stripe Center-Text Line-Center  " + bgcol }>
          {title}
        </h3>
      </div>
    </LoadFade>
);
export const TitleText = ({title, fcol}) => (
  <LoadFade>
    <h3 className={"Large-Font Title-Letter-Spacing " + fcol}>
      {title}
    </h3>
  </LoadFade>
);
