import Link from "next/link";
import Image from "next/image";

import classes from "./pproject-item.module.css";

const ProjectItem = ({
  image,
  title,
  technologies,
  description,
  lhref,
  ghref,
}) => {
  return (
    <li>
      <div className={classes.project}>
        <Image src={image} alt={title} width={600} height={400}></Image>
        <div className={classes.description}>
          <h3>{title}</h3>
          <h5>Build with</h5>
          <p className={classes.technologies}>{technologies}</p>
          <h5>Description</h5>
          <p>{description}</p>
          <div className={classes.links}></div>
          <div className={classes.links}>
            <Link href={lhref} title={title} target="_blank">
              Live site
            </Link>
            <Link href={ghref} title={title} target="_blank">
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
