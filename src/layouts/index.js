import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'typeface-lato';
import 'typeface-inconsolata';
import { rhythm } from '../utils/typography';

import { SiteHeader, SiteNav, NavLink, SubHeader, Logo, Name, Main, BillboardVideo } from '../components/Headings';
import { SocialLinks, SocialLink } from '../components/Footer';

import billboardmp4 from '../pages/showcase2.mp4';
import billboardwebm from '../pages/showcase2.webmhd.webm';

const FooterLinks = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/stolinski',
    color: '#00aced',
  },
  {
    name: 'Youtube',
    link: 'http://www.youtube.com/user/LevelUpTuts',
    color: '#b00',
  },
  {
    name: 'Github',
    link: 'https://github.com/stolinski',
    color: '#4183c4',
  },
  {
    name: 'BitBucket',
    link: 'https://bitbucket.org/stolinski',
    color: '#205081',
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/LevelUpTuts',
    color: '#3b5998',
  },
];

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  };

  render() {
    return (
      <div>
        <Helmet
          title="Scott Tolinski"
          meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
        />
        <BillboardVideo>
          <source src={billboardmp4} type="video/mp4" />
          <source src={billboardwebm} type="video/webm" />
        </BillboardVideo>
        <SiteHeader>
          <Link to="/">
            <Logo page={this.props.location.pathname.replace('/', '')}>ST</Logo>
            <Name>Scott Tolinski</Name>
          </Link>
          <SiteNav>
            <ul>
              <li>
                <NavLink underline="#16a085" to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink underline="#e74c3c" to="/projects">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink underline="#2980b9" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </SiteNav>
        </SiteHeader>

        <Main>{this.props.children()}</Main>

        <footer className="footer">
          <SubHeader>Where to find me</SubHeader>
          <SocialLinks>
            {FooterLinks.map(link => (
              <li key={link.name}>
                <SocialLink target="_blank" rel="nofollow" color={link.color} href={link.link}>
                  {link.name}
                </SocialLink>
              </li>
            ))}
          </SocialLinks>
        </footer>
      </div>
    );
  }
}
