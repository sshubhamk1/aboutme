import { Fragment } from 'react';
import Home from '../components/home-page/home';
import { projectsList } from "./../data/projects-list";
import Meta from '../components/layout/meta';
//@ts-ignore
export default function Index({ projects }) {
  return (
    <Fragment>
      <Meta title='Shubham kumar - Senior Software Engineer' />
      <Home projects={projects} />
    </Fragment>
  )
}

export function getStaticProps() {
  const projects = projectsList;
  return {
    props: {
      projects
    },
  };
}
