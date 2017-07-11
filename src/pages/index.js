import React, { Component } from 'react';

import billboardmp4 from './showcase2.mp4';
import billboardwebm from './showcase2.webmhd.webm';

import { SiteTitle, BillboardVideo, MainWrapper } from '../components/Headings';

export default class Index extends Component {
  render() {
    return (
      <div>
        <BillboardVideo>
          <source src={billboardmp4} type="video/mp4" />
          <source src={billboardwebm} type="video/webm" />
        </BillboardVideo>
        <MainWrapper>
          <SiteTitle>I am Scott Tolinski</SiteTitle>
          <p>I make excellent, modern websites.</p>
        </MainWrapper>
      </div>
    );
  }
}
