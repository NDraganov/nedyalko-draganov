import AboutImage from "./about-image";

import classes from "./about-text.module.css";

const AboutText = () => {
  const hrefChef =
    "https://unsplash.com/@romainbriaux?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
  const unsplashHrefChef =
    "https://unsplash.com/photos/G7eI_KNp7iw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
  const hrefDeveloper =
    "https://unsplash.com/ko/@ffstop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
  const unsplashHrefDeveloper =
    "https://unsplash.com/photos/6sAl6aQ4OWI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
  return (
    <div className={classes.text}>
      <div>
        <AboutImage
          src="/images/about-images/chef.jpg"
          alt="Chef"
          href={hrefChef}
          text="Romain Briaux"
          unsplashHref={unsplashHrefChef}
        />
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
      </div>
      <div>
        <AboutImage
          src="/images/about-images/developer.jpg"
          alt="Developer"
          href={hrefDeveloper}
          text="Fotis Fotopoulos"
          unsplashHref={unsplashHrefDeveloper}
        />
        <p>
          Quick <span>learner</span> and <span>adaptive</span> to a{" "}
          <span>working environment</span>. I got an eye for{" "}
          <span>details</span> and <span>colour schemes</span>.
        </p>
        <p>
          I'm targeting <span>React.js</span> and <span>Next.js</span>, although
          I'm interested in learning <span>Angular</span> in the future. I also
          got some fundamentals with <span>Node.js/Express.js</span>,{" "}
          <span>MongoDB/Mongoose</span> and <span>Passport.js</span>.
        </p>
      </div>
    </div>
  );
};

export default AboutText;
