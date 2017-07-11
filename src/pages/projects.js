import React from 'react';
import Helmet from 'react-helmet';

import { Title, MainWrapper } from '../components/Headings';
import { ProjectsList } from '../components/ProjectsStyles';

export default class Projects extends React.Component {
  render() {
    return (
      <MainWrapper color="#e74c3c">
        <Title>Projects</Title>
        <p>I've worked on many types of projects both personal and professional. Here are some projects I've developed/created.</p>
        <ProjectsList>
          <li>
            <h3 className="project-title">
              <a target="_blank" href="http://getatya.com/">Atya</a>
            </h3>
            <p>
              Designed & Developed booking and artistic inspiration app:<br />
              Built With: Meteor, React, Stylus
            </p>
          </li>
          <li>
            <h3 className="project-title">
              <a target="_blank" href="http://www.ford.com/">Ford.com Global UX</a>
            </h3>
            <p>
              Design Prototypes and Interactive Digital Styleguide for the Ford.com Global Redesign:<br />
              Built With: Angular.js, Sass
            </p>
          </li>
          <li>
            <h3 className="project-title">
              <a target="_blank" href="http://store.leveluptutorials.com/">Level Up Tutorials Store</a>
            </h3>
            <p>
                A Physical &amp; Digital Products Ecommerce Site for Level Up Tutorials:<br />
                Built With: Meteor, React, Stylus
            </p>
          </li>
          <li>
            <h3 className="project-title">
              <a target="_blank" href="http://leveluptuts.com/">Level Up Tutorials</a>
            </h3>
            <p>
                870+ Web Dev Tutorials on: <a target="_blank" href="https://www.youtube.com/channel/UCyU5wkjgQYGRB0hIHMwm2Sg">Youtube</a><br />Built With: Meteor, React, Stylus
            </p>
          </li>
          <li>
            <h3 className="project-title">
              <a target="_blank" href="http://materialcolors.com/">Material Colors</a>
            </h3>
            <p>Built &amp; Designed for: Fun<br />Built With: Angular.js, Polymer, Sass</p>
          </li>
          <li>
            <h3 className="project-title">
              <a target="_blank" href="http://qltd.com/">Q LTD</a>
            </h3>
            <p>Built for: <a target="_blank" href="http://qltd.com">Q LTD</a><br />Built With: Node.js, Express, MongoDB, Sass/Compass/Susy</p>
          </li>
          <li>
            <h3 className="project-title">
              <a target="_blank" href="http://www.siggraph.org/">ACM SIGGRAPH</a>
            </h3>
            <p>Built for: <a target="_blank" href="http://qltd.com">Q LTD</a><br />Built With: Drupal 7, Omega 3, Sass/Compass</p>
          </li>
          <li>
            <h3 className="project-title">
              <a target="_blank" href="http://www.concrete.org/">Concrete.org</a>
            </h3>
            <p>Built for: <a target="_blank" href="http://qltd.com">Q LTD</a><br />Built Templates With: HTML5, CSS3, JavaScript</p>
          </li>
        </ProjectsList>
      </MainWrapper>
    );
  }
}
