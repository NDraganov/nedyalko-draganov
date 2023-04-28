import NavigationLink from "./navigation-link";

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <NavigationLink href="/" title="Home page" text="Home" />
          <NavigationLink href="/about" title="About page" text="About" />
          <NavigationLink
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
