import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loader from "./Components/Loader";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Functions/theme";
import { GlobalStyles } from "./Functions/global";

const HomeView = React.lazy(() => import("./Components/HomeView"));
const HelpPage = React.lazy(() => import("./Components/HelpPage"));
const AboutView = React.lazy(() => import("./Components/AboutView"));
const Footer = React.lazy(() => import("./Components/Footer"));
const NavigationBar = React.lazy(() => import("./Components/NavigationBar"));
const Indoor = React.lazy(() => import("./Components/Indoor"));
const Outdoor = React.lazy(() => import("./Components/Outdoor"));

function App() {
  const [theme, setTheme] = useState(getTheme);
  const themeToggler = () => {
    let newTheme;
    theme === "light" ? (newTheme = "dark") : (newTheme = "light");
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  function getTheme() {
    const storedTheme = localStorage.getItem("theme");
    console.log(storedTheme);

    if (storedTheme) {
      return storedTheme;
    } else {
      return "light";
    }
  }

  return (
    <Suspense fallback={<Loader />}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Router basename="/">
          <div className="relative pb-10 min-h-screen">
            <NavigationBar themeToggler={themeToggler} theme={theme} />
            <Switch>
              <Route exact path="/">
                <HomeView />
              </Route>
              <Route path="/about">
                <AboutView />
              </Route>
              <Route path="/indoor">
                <Indoor />
              </Route>
              <Route path="/outdoor">
                <Outdoor />
              </Route>
              <Route path="/help/:id" component={HelpPage} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
