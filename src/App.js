import React, { Suspense, useState } from "react";
import Indoor from "./Components/Indoor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loader from "./Components/Loader";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import AboutView from "./Components/AboutView";
import HomeView from "./Components/HomeView";
import LearnMoreView from "./Components/LearnMoreView";
import HelpPage from "./Components/HelpPage";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Functions/theme";
import { GlobalStyles } from "./Functions/global";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Router basename="/">
        <div className="relative pb-10 min-h-screen">
          <NavigationBar themeToggler={themeToggler} theme={theme} />
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path="/">
                <HomeView />
              </Route>
              <Route path="/about">
                <AboutView />
              </Route>
              <Route path="/learnMore">
                <LearnMoreView />
              </Route>
              <Route path="/indoor">
                <Indoor />
              </Route>
              <Route path="/help/:id" component={HelpPage} />
            </Switch>
          </Suspense>
          <div>
            <Footer />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
