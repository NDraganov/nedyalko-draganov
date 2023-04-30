import { useRouter } from "next/router";
import NavigationBrand from "./navigation-brand";
import NavigationLink from "./navigation-link";
import MenuIcon from "@mui/icons-material/Menu";

import classes from "./navigation.module.css";

const Navigation = ({ click }) => {
  const router = useRouter();
  const currentRouter = router.pathname;
  return (
    <header className={classes.header}>
      <NavigationBrand />
      <MenuIcon sx={{ fontSize: 50 }} onClick={click} />
      <nav>
        <ul>
          <NavigationLink
            style={currentRouter === "/" ? classes.active : classes.nonActive}
            href="/"
            title="Home page"
            text="Home"
          />
          <NavigationLink
            style={
              currentRouter === "/about" ? classes.active : classes.nonActive
            }
            href="/about"
            title="About page"
            text="About"
          />
          <NavigationLink
            style={
              currentRouter === "/portfolio"
                ? classes.active
                : classes.nonActive
            }
            href="/portfolio"
            title="Portfolio page"
            text="Portfolio"
          />
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
