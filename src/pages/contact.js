import React from 'react';

import { Title, MainWrapper } from '../components/Headings';

export default class Index extends React.Component {
  render() {
    return (
      <MainWrapper color="#2980b9">
        <Title>Contact</Title>
        <p>Feel free to contact me through the email below, I'd love to chat.</p><p className="cont"><a href="mailto:scott.tolinski@gmail.com" className="email">scott.tolinski@gmail.com</a></p>
      </MainWrapper>
    );
  }
}
