import HomeLinks from "./home-links";
import IntroDescription from "./intro-description";

import classes from "./intro.module.css";

const Intro = () => {
  return (
    <div className={classes.intro}>
      <h1>Nedyalko Draganov</h1>
      <p className={classes.occupation}>Web Developer</p>
      <IntroDescription />
      <HomeLinks />
    </div>
  );
};

export default Intro;
