import classes from "./about-text.module.css";

const AboutText = () => {
  return (
    <div className={classes.text}>
      <p>
        I'd worked in the <span>restaurant</span> industry for years as a
        <span> chef</span>. Currently, I'm working as a
        <span> Trading Assistant</span>.
      </p>
      <p>
        I've started a <span>journey</span> of learning{" "}
        <span>Web Development</span>. It <span>hasn't been easy</span>, but
        solving the <span>problems</span> and seeing the <span>result</span>{" "}
        it's amazing.
      </p>
      <p>
        Quick <span>learner</span> and <span>adaptive</span> to a{" "}
        <span>working environment</span>. I got an eye for <span>details</span>{" "}
        and <span>colour schemes</span>.
      </p>
      <p>
        I'm targeting <span>React.js</span> and <span>Next.js</span>, although
        I'm interested in learning <span>Angular</span> in the future. I also
        got some fundamentals with <span>Node.js/Express.js</span>,{" "}
        <span>MongoDB/Mongoose</span> and <span>Passport.js</span>.
      </p>
    </div>
  );
};

export default AboutText;
