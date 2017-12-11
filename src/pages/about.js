import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import { Title, MainWrapper } from '../components/Headings';
import { Resume, FakeButtons } from '../components/AboutStyles';

export default class About extends React.Component {
  render() {
    return (
      <MainWrapper color="#16a085">
        <Title>About</Title>
        <div>
          <p>
            Hi, I'm Scott Tolinski.
          </p>
          <p>
            I'm a Senior Web Developer for Team Detroit and formerly a web applications developer for The University of Michigan and the Senior Developer at <a target="_blank" href="http://qltd.com">Q LTD</a>&nbsp;in Ann Arbor, MI. I also do freelance web design and development for projects that I find interesting, challenging or exciting, and give private training or consulting in various web topics. &nbsp;In 2012, I created <a target="_blank" href="http://www.youtube.com/user/LevelUpTuts/featured">Level Up Tuts</a>&nbsp;with web developer <a target="_blank" href="http://benschaaf.com/">Ben Schaaf</a>. With Level Up Tutorials I have taken our knowledge of web technologies to YouTube to provide free training to developers looking to learn something new. I've also created premium tutorial packages for <a target="_blank" href="https://www.packtpub.com/getting-started-with-magento/video">Packt Publishing</a>.
          </p>
          <p>
            I also enjoy <a target="_blank" href="http://youtu.be/Zcoj4Zfj6_k?t=1m34s">bboying</a> also known as breakdancing, and have been dancing for over 8 years doing shows for professional NFL and NBA teams. I'm inspired by a hot cup of green tea, excellent music, and Shaw Bros. kung fu movies.
          </p>
          <p>
            Please <Link to="/contact">contact me</Link> if you would like to work on a project together, or just want to chat.
          </p>
        </div>

        <Resume>
          <FakeButtons />
          <div className="resume-inside">
            <h3>&#047;&#042; --Resume-- &#042;&#047;</h3>
            <h4>&#047;&#042; SUMMARY OF QUALIFICATIONS &#042;&#047;</h4>
            <ul>
              <li>Received a Bachelors degree in the Fine Arts at the University of Michigan’s Media Arts program.</li>
              <li>Excellent organization, self-motivation, and problem-solving skills.</li>
              <li>Created and runs a popular Youtube coding education channel with over 700 videos, 8.5million views &amp; 85k subscribers.</li>
              <li>Creative, strong communication skills and consistently meets deadlines.</li>
              <li>Passionate about web development and new technologies.</li>
            </ul>

            <h4>&#047;&#042; Experience &#042;&#047;</h4>
            <h5>&#047;&#047; SENIOR FRONT-END DEVELOPER, Team Detroit - DEARBORN, MI</h5>
            <span className="time">&#047;&#047; MAY 2014 - PRESENT</span>
            <ul>
              <li>Rapidly prototyped designs for the design process and user testing.</li>
              <li>Utilized AngularJS to build a component library for Ford.com Global Redesign.</li>
              <li>Met with Ford executives to display functionality of design experiments.</li>
              <li>Worked on a team of developers to coordinate and develop component library.</li>
              <li>Built resposive web applications to display potential design and interaction experiences.</li>
            </ul>
            <h5>&#047;&#047; OWNER, Level Up Tuts - ANN ARBOR, MI</h5>
            <span className="time">&#047;&#047; MARCH 2012 - PRESENT</span>
            <ul>
              <li>Wrote, produced and recorded over 1000 popular tutorial videos on various topics for Level Up Tuts (www.youtube.com/user/LevelUpTuts) with over 8,550,000 views.</li>
              <li>Designed websites, interfaces, and layouts to fit clients’ desires including developing responsive layouts to enhance the experience on mobile devices.</li>
              <li>Consulted on large scale development projects.</li>
              <li>Provided dedicated training on coding practices and content management systems.</li>
              <li>Wrote, produced and recorded commercial video tutorial series for Envato and Packt Publishing.</li>
            </ul>

            <h5>&#047;&#047; WEB APPLICATIONS DEVELOPER, UM Creative - ANN ARBOR, MI</h5>
            <span className="time">&#047;&#047; OCT  2013 - MAY 2014</span>
            <ul>
              <li>Developed single page applications using Angular.js or Backbone.js.</li>
              <li>Maintained and built websites for secure University servers.</li>
              <li>Took initiative on internal projects to advance direction of department.</li>
              <li>Tested and troubleshot slow application speeds as well as slow front end load times on existing websites.</li>
              <li>Built responsive, CMS based websites with rapid turnaround.</li>
            </ul>

            <h5>&#047;&#047; SENIOR DEVELOPER, Q LTD - ANN ARBOR, MI</h5>
            <span className="time">&#047;&#047; MARCH 2011 - OCT 2013</span>
            <ul>
              <li>Built large, medium, and small scale websites from the ground up using appropriate content management systems (Drupal, Wordpress, Expression Engine, Magento).</li>
              <li>Utilized latest HTML5 and CSS3 technologies to build semantically correct and visually interesting responsive designs.</li>
              <li>Created interactive elements with custom JavaScript and Jquery.</li>
              <li>Worked frequently with clients to train, assist, and troubleshoot their websites.</li>
              <li>Used Sass, Compass, and Coffee Script to more effectively write clean, fast, and easy to read code.</li>
            </ul>

            <h4>&#047;&#042; EDUCATION &#042;&#047;</h4>
            <ul>
              <li>University of Michigan - Media Arts Bachelors of the Arts Spring 2008</li>
            </ul>
          </div>
        </Resume>
      </MainWrapper>
    );
  }
}
