import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import SpaceBackground from "../components/spaceBackground/SpaceBackground";
import { themes } from "../theme";

const theme     = themes.dark;
const pageLayer = { position: "relative", zIndex: 1 };

export default function Main() {
  return (
    <>
      <SpaceBackground />
      <div style={pageLayer}>
        <HashRouter basename="/">
          <Switch>
            <Route path="/"          exact render={() => <Home       theme={theme} />} />
            <Route path="/home"            render={() => <Home       theme={theme} />} />
            <Route path="/experience"      render={() => <Experience theme={theme} />} />
            <Route path="/contact"         render={() => <Contact    theme={theme} />} />
          </Switch>
        </HashRouter>
      </div>
    </>
  );
}
