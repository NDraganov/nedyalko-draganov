import fs from "fs/promises";
import path from "path";
import ProjectItem from "../components/portfolio-page/project-item";

import classes from "./portfolio.module.css";

const Portfolio = ({ projects }) => {
  return (
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
    </div>
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
