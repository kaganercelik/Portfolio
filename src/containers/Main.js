import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import { ChatModal } from "../components/ChatModal";

export default function Main(properties) {
  if (settings.isSplash) {
    return (
      <div>
        <ChatModal theme={properties.theme} />
        <HashRouter basename="/">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Splash
                  {...props}
                  theme={properties.theme}
                  setTheme={properties.setTheme}
                />
              )}
            />
            <Route
              path="/home"
              render={(props) => (
                <Home
                  {...props}
                  theme={properties.theme}
                  setTheme={properties.setTheme}
                />
              )}
            />
            <Route
              path="/experience"
              exact
              render={(props) => (
                <Experience
                  {...props}
                  theme={properties.theme}
                  setTheme={properties.setTheme}
                />
              )}
            />
            <Route
              path="/education"
              render={(props) => (
                <Education
                  {...props}
                  theme={properties.theme}
                  setTheme={properties.setTheme}
                />
              )}
            />
            <Route
              path="/contact"
              render={(props) => (
                <Contact
                  {...props}
                  theme={properties.theme}
                  setTheme={properties.setTheme}
                />
              )}
            />
            <Route
              path="/splash"
              render={(props) => (
                <Splash
                  {...props}
                  theme={properties.theme}
                  setTheme={properties.setTheme}
                />
              )}
            />
            <Route
              path="/projects"
              render={(props) => (
                <Projects
                  {...props}
                  theme={properties.theme}
                  setTheme={properties.setTheme}
                />
              )}
            />
          </Switch>
        </HashRouter>
      </div>
    );
  } else {
    return (
      <div>
        <ChatModal theme={properties.theme} />
        <HashRouter basename="/">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Home
                  {...props}
                  theme={properties.theme}
                  setTheme={properties.setTheme}
                />
              )}
            />
            <Route
              path="/home"
              render={(props) => (
                <Home
                  {...props}
                  theme={properties.theme}
                  setTheme={properties.setTheme}
                />
              )}
            />
            <Route
              path="/experience"
              exact
              render={(props) => (
                <Experience
                  {...props}
                  theme={properties.theme}
                  setTheme={properties.setTheme}
                />
              )}
            />
            <Route
              path="/education"
              render={(props) => (
                <Education
                  {...props}
                  theme={properties.theme}
                  setTheme={properties.setTheme}
                />
              )}
            />
            <Route
              path="/contact"
              render={(props) => (
                <Contact
                  {...props}
                  theme={properties.theme}
                  setTheme={properties.setTheme}
                />
              )}
            />
            <Route
              path="/projects"
              render={(props) => (
                <Projects
                  {...props}
                  theme={properties.theme}
                  setTheme={properties.setTheme}
                />
              )}
            />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
