import React from 'react';
import Layout from '../components/Layout';

import { Title, MainWrapper } from '../components/Headings';
import { ProjectsList } from '../components/ProjectsStyles';

const projects = [
  {
    title: 'Level Up Tutorials',
    link: 'https://www.leveluptutorials.com/',
    desc:
      '2000+ Web Dev Tutorials on: <a target="_blank" href="https://www.youtube.com/channel/UCyU5wkjgQYGRB0hIHMwm2Sg">Youtube</a><br />Built With: Meteor, React, Stylus',
  },
  {
    title: 'Syntax',
    link: 'https://syntax.fm/',
    desc: 'A popular web-dev podcast hosted by Wes Bos & Scott Tolinski',
  },
  {
    title: 'Ford.com Global UX',
    link: 'http://www.ford.com/',
    desc:
      'Design Prototypes and Interactive Digital Styleguide for the Ford.com Global Redesign:<br />Built With: Angular.js, Sass',
  },
  {
    title: 'Q LTD',
    link: 'http://qltd.com/',
    desc:
      'Built for: <a target="_blank" href="http://qltd.com">Q LTD</a><br />Built With: Node.js, Express, MongoDB, Sass/Compass/Susy',
  },
  {
    title: 'ACM SIGGRAPH',
    link: 'http://www.siggraph.org/',
    desc:
      'Built for: <a target="_blank" href="http://qltd.com">Q LTD</a><br />Built With: Drupal 7, Omega 3, Sass/Compass',
  },
  {
    title: 'Concrete.org',
    link: 'http://www.concrete.org/',
    desc:
      'Built for: <a target="_blank" href="http://qltd.com">Q LTD</a><br />Built Templates With: HTML5, CSS3, JavaScript',
  },
];

export default class Projects extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <MainWrapper color="#e74c3c">
          <Title>Projects</Title>
          <p>
            I've worked on many types of projects both personal and professional. Here are some projects I've
            developed/created.
          </p>
          <ProjectsList>
            {projects.map(project => (
              <li key={project.title}>
                <h3 className="project-title">
                  <a target="_blank" rel="noopener noreferrer" href={project.link}>
                    {project.title}
                  </a>
                </h3>
                <p dangerouslySetInnerHTML={{ __html: project.desc }} />
              </li>
            ))}
          </ProjectsList>
        </MainWrapper>
      </Layout>
    );
  }
}
