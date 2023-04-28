import Link from "next/link";
import NavigationBrand from "../navigation/navigation-brand";

const Footer = () => {
  return (
    <footer>
      <div>
        <Link
          href="https://www.linkedin.com/in/nedyalko-draganov-12958a235/"
          title="LinkedIn"
          target="_blank"
        ></Link>
        <Link
          href="https://github.com/NDraganov"
          title="GitHub"
          target="_blank"
        ></Link>
      </div>
      <div>
        <NavigationBrand />
      </div>
    </footer>
  );
};

export default Footer;
