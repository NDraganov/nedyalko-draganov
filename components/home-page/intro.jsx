import HomeLinks from "./home-links";
import IntroDescription from "./intro-description";

import classes from "./intro.module.css";

const Intro = () => {
  return (
    <div className={classes.intro}>
      <p className={classes.title}>Nedyalko Draganov</p>
      <p className={classes.occupation}>Web Developer</p>
      <IntroDescription />
      <HomeLinks />
    </div>
  );
};

export default Intro;
