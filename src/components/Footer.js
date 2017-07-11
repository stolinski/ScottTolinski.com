import styled from 'styled-components';
import { media } from './Breakpoints';

const SocialLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
  ${media.tablet`
    display: flex;
    justify-content: center;
    li + li {
      margin-left: 20px;
    }
  `}
`;

const SocialLink = styled.a`
  padding: 5px 8px;
  border-radius: 3px;
  transition: all 0.3s ease;
  color: #FFF;
  background-color: ${props => props.color};
`;

export {
  SocialLinks,
  SocialLink,
};
