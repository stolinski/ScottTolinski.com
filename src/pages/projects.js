import React from 'react';
import Helmet from 'react-helmet';

import { Title, MainWrapper } from '../components/Headings';
import { ProjectsList } from '../components/ProjectsStyles';

const projects = [
  {
    title: 'Atya',
    link: 'http://getatya.com/',
    desc: 'Designed & Developed booking and artistic inspiration app:<br />Built With: Meteor, React, Stylus',
  }, {
    title: 'Ford.com Global UX',
    link: 'http://www.ford.com/',
    desc: 'Design Prototypes and Interactive Digital Styleguide for the Ford.com Global Redesign:<br />Built With: Angular.js, Sass',
  }, {
    title: 'Level Up Tutorials',
    link: 'https://www.leveluptutorials.com/',
    desc: '1000+ Web Dev Tutorials on: <a target="_blank" rel="nofollow" href="https://www.youtube.com/channel/UCyU5wkjgQYGRB0hIHMwm2Sg">Youtube</a><br />Built With: Meteor, React, Stylus',
  }, {
    title: 'Q LTD',
    link: 'http://qltd.com/',
    desc: 'Built for: <a target="_blank" rel="nofollow" href="http://qltd.com">Q LTD</a><br />Built With: Node.js, Express, MongoDB, Sass/Compass/Susy',
  }, {
    title: 'ACM SIGGRAPH',
    link: 'http://www.siggraph.org/',
    desc: 'Built for: <a target="_blank" rel="nofollow" href="http://qltd.com">Q LTD</a><br />Built With: Drupal 7, Omega 3, Sass/Compass',
  }, {
    title: 'Concrete.org',
    link: 'http://www.concrete.org/',
    desc: 'Built for: <a target="_blank" rel="nofollow" href="http://qltd.com">Q LTD</a><br />Built Templates With: HTML5, CSS3, JavaScript',
  },
];


export default class Projects extends React.Component {
  render() {
    return (
      <MainWrapper color="#e74c3c">
        <Title>Projects</Title>
        <p>I've worked on many types of projects both personal and professional. Here are some projects I've developed/created.</p>
        <ProjectsList>
          {projects.map(project => (
            <li>
              <h3 className="project-title">
                <a target="_blank" rel="nofollow" href={project.link}>{project.title}</a>
              </h3>
              <p dangerouslySetInnerHTML={{ __html: project.desc }} />
            </li>
          ))}
        </ProjectsList>
      </MainWrapper>
    );
  }
}
