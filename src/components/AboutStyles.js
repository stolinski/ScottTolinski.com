import styled from 'styled-components';

const Resume = styled.div`
  background: #222;
  width: 98%;
  margin: 80px auto 50px;
  font-family: 'Inconsolata', monospace;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  &:before {
    border-radius: 6px 6px 0 0;
    content: '';
    background: #1a1a1a;
    width: 100%;
    display: block;
    height: 20px;
    position: relative;
    top: -4px;
  }
  &:after {
    border-radius: 0 0 6px 6px;
    content: '';
    background: #1a1a1a;
    width: 100%;
    display: block;
    height: 20px;
    position: relative;
    bottom: -4px;
  }
  h3 {
    font-family: 'Inconsolata', monospace;
    font-weight: 400;
  }
  h4 {
    font-family: 'Inconsolata', monospace;
    font-weight: 400;
    color: #aaa;
    margin: 50px 0 20px;
  }
  h5 {
    font-family: 'Inconsolata', monospace;
    font-weight: 400;
    color: #aaa;
    margin: 40px 0 6px;
  }
  .time {
    margin-bottom: 10px;
    display: block;
    font-size: 13px;
    color: #aaa;
  }
  .resume-inside {
    padding: 16px 20px 16px;
  }
  ul {
    margin: 0;
    list-style: none;
  }
  li {
    margin-bottom: 15px;
    color: #eee;
  }
`;

const FakeButtons = styled.span`
  background: #16a085;
  height: 7px;
  width: 7px;
  display: block;
  border-radius: 7px;
  position: relative;
  top: -17px;
  left: 22px;
  &:before,
  &:after {
    content: '';
    background: #16a085;
    height: 7px;
    width: 7px;
    display: block;
    border-radius: 7px;
    position: relative;
    top: 0;
  }
  &:before {
    left: -13px;
  }
  &:after {
    top: -7px;
    left: 13px;
  }
`;

export { Resume, FakeButtons };
