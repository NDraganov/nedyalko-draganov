import { Fragment } from "react";
import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";
import Sidebar from "../navigation/sidebar";

const Layout = (props) => {
  return (
    <Fragment>
      <Navigation />
      {/* <Sidebar /> */}
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
