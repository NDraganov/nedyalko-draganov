import fs from "fs/promises";
import path from "path";
import { Fragment } from "react";
import Head from "next/head";
import ProjectItem from "../components/portfolio-page/project-item";
import CommingSoon from "../components/portfolio-page/coming-soon";

import classes from "./portfolio.module.css";

const Portfolio = ({ projects }) => {
  return (
    <Fragment>
      <Head>
        <title>Nedyalko Draganov - Web Developer - Projects</title>
        <meta
          name="description"
          content="Nedyalko Draganov - Web Developer - checkout my web app projects"
        />
      </Head>
      <div className={classes.portfolio}>
        <h1>Porfolio</h1>
        <section className={classes.learning}>
          <h2>Learning People projects</h2>
          <ul>
            {projects.map((project) => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </ul>
        </section>
        <CommingSoon text="Weather App coming soon ..." />
      </div>
    </Fragment>
  );
};

export async function getStaticProps() {
  // Reading data from Learning Peope projects file
  const filePathLP = path.join(
    process.cwd(),
    "data/learning-people",
    "learning-people-projects.json"
  );
  const jsonDataLP = await fs.readFile(filePathLP);
  const dataLP = JSON.parse(jsonDataLP);
  return {
    props: {
      projects: dataLP.projects,
    },
  };
}

export default Portfolio;
