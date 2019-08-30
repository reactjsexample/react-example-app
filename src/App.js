import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import styles from "./App.module.scss";
import XxxAnswersPage from "./pages/XxxAnswersPage/XxxAnswersPage";
import XxxHeader from "./components/XxxHeader/XxxHeader";
import XxxHomePage from "./pages/XxxHomePage/XxxHomePage";
import XxxPageNotFoundPage from "./pages/XxxPageNotFoundPage/XxxPageNotFoundPage";
import XxxQuestionsPage from "./pages/XxxQuestionsPage/XxxQuestionsPage";

function App() {
  return (
    <div className={styles.app} id="xxx-app">
      <Router>
        <XxxHeader />
        <div>
          <Switch>
            <Route exact path="/" component={XxxHomePage} />
            <Route path="/answers/:id" component={XxxAnswersPage} />
            <Route path="/questions" component={XxxQuestionsPage} />
            <Route component={XxxPageNotFoundPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
