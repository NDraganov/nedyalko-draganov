import { Fragment, useState } from "react";
import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";
import Sidebar from "../navigation/sidebar";

import classes from "./layout.module.css";

const Layout = (props) => {
  const [sideBar, setSideBar] = useState(false);

  function handleOpenSideBar() {
    setSideBar(true);
  }
  function handleCloseSideBar() {
    setSideBar(false);
  }
  return (
    <Fragment>
      <Navigation click={handleOpenSideBar} />
      <Sidebar
        style={sideBar === false && classes.hide}
        click={handleCloseSideBar}
      />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
