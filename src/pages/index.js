import React, { Component } from 'react';

import { SiteTitle, MainWrapper } from '../components/Headings';

export default class Index extends Component {
  render() {
    return (
      <div>
        <MainWrapper>
          <SiteTitle>I am Scott Tolinski</SiteTitle>
          <p>I make excellent, modern websites.</p>
        </MainWrapper>
      </div>
    );
  }
}
