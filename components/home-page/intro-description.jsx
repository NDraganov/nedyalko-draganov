import classes from "./intro-description.module.css";

const IntroDescription = () => {
  return (
    <div className={classes.description}>
      <p className={classes.text}>
        I <span>design</span> and <span>code</span> beautiful and
        <span> colourful</span> ideas, yet <span>responsive</span> and
        <span> UI</span>/<span>UX</span> friendly.
      </p>
    </div>
  );
};

export default IntroDescription;
