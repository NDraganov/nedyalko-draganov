import Link from "next/link";
import Image from "next/image";
import Button from "../button/button";

import classes from "./project-item.module.css";

const ProjectItem = (props) => {
  const { image, title, technologies, description, lhref, ghref } =
    props.project;
  return (
    <li>
      <div className={classes.project}>
        <Image src={image} alt={title} width={780} height={450}></Image>
        <div className={classes.description}>
          <h3>{title}</h3>
          <h5>Build with</h5>
          <p className={classes.technologies}>{technologies}</p>
          <h5>Description</h5>
          <p>{description}</p>
          <div className={classes.links}>
            <Button href={lhref} title={title} text="Live site" />
            <Button href={ghref} title={title} text="GitHub" />
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
