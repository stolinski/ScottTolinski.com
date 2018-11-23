import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import 'typeface-lato';
import 'typeface-inconsolata';
import { Transition } from 'react-spring';

import './styles.css';
import {
  SiteHeader, SiteNav, NavLink, Logo, Name, Main, BillboardVideo,
} from './Headings';
import Footer from './Footer';

import billboardmp4 from '../pages/showcase2.mp4';
import billboardwebm from '../pages/showcase2.webmhd.webm';

const Layout = ({ location, children }) => {
  const isHome = location.pathname === '/';
  return (
    <div>
      <Helmet
        title="Scott Tolinski"
        meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
      />
      <Transition items={isHome} from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0 }}>
        {isHome => isHome
          && (styles => (
            <div style={styles} key="billboard">
              <BillboardVideo>
                <source src={billboardmp4} type="video/mp4" />
                <source src={billboardwebm} type="video/webm" />
              </BillboardVideo>
            </div>
          ))
        }
      </Transition>
      <SiteHeader>
        <Link to="/">
          <Logo page={location.pathname.replace('/', '')}>ST</Logo>
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

      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;

// import React from 'react';

// import { TypographyStyle } from 'react-typography';
// import typography from './utils/typography';

// export default class HTML extends React.Component {
//   static propTypes = {
//     body: PropTypes.string,
//   };

//   render() {
//     return (
//       <html lang="en">
//         <head>
//           <meta charSet="utf-8" />
//           <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//           <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-icon-57x57.png" />
//           <link rel="apple-touch-icon" sizes="60x60" href="/static/apple-icon-60x60.png" />
//           <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-icon-72x72.png" />
//           <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-icon-76x76.png" />
//           <link rel="apple-touch-icon" sizes="114x114" href="/static/apple-icon-114x114.png" />
//           <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-icon-120x120.png" />
//           <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-icon-144x144.png" />
//           <link rel="apple-touch-icon" sizes="152x152" href="/static/apple-icon-152x152.png" />
//           <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-icon-180x180.png" />
//           <link rel="icon" type="image/png" sizes="192x192" href="/static/android-icon-192x192.png" />
//           <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
//           <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96x96.png" />
//           <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
//           <meta name="msapplication-TileColor" content="#111" />
//           <meta name="msapplication-TileImage" content="/static/ms-icon-144x144.png" />
//           <meta name="theme-color" content="#111" />
//           {this.props.headComponents}
//           <TypographyStyle typography={typography} />
//           {css}
//         </head>
//         <body>
//           <div id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
//           {this.props.postBodyComponents}
//         </body>
//       </html>
//     );
//   }
// }
