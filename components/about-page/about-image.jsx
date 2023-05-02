import Image from "next/image";
import Link from "next/link";

import classes from "./about-image.module.css";

const AboutImage = ({ src, alt, href, text, unsplashHref }) => {
  return (
    <div className={classes.image}>
      <Image src={src} alt={alt} priority={true} width={600} height={400} />
      <p>
        Photo by <Link href={href}>{text}</Link> on{" "}
        <Link href={unsplashHref}>Unsplash</Link>
      </p>
    </div>
  );
};

export default AboutImage;
