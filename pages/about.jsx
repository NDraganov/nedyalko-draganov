import Image from "next/image";
import AboutText from "../components/about-page/about-text";
import Toolkit from "../components/about-page/toolkit";

import classes from "./about.module.css";

const About = () => {
  return (
    <div className={classes.about}>
      <h1>About</h1>
      <Image
        src="/images/development.jpg"
        alt="develop"
        priority={true}
        width={700}
        height={400}
      />
      <AboutText />
      <Toolkit />
    </div>
  );
};

export default About;
