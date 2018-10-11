import React, { Component } from 'react';
import Layout from '../components/Layout';

import { SiteTitle, MainWrapper } from '../components/Headings';

export default class Index extends Component {
  render() {
    return (
      <Layout {...this.props}>
        <MainWrapper>
          <SiteTitle>I am Scott Tolinski</SiteTitle>
          <p>I make excellent, modern websites.</p>
        </MainWrapper>
      </Layout>
    );
  }
}
