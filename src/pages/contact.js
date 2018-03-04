import React from 'react';

import { Title, MainWrapper } from '../components/Headings';

export default class Index extends React.Component {
  render() {
    return (
      <MainWrapper color="#2980b9">
        <Title>Contact</Title>
        <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        <p>Feel free to contact me through the email below, I'd love to chat.</p>
        <p className="cont">
          <a href="mailto:scott.tolinski@gmail.com" className="email">
            scott.tolinski@gmail.com
          </a>
        </p>
      </MainWrapper>
    );
  }
}
