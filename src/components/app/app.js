import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./app.css";
import Header from "../header";
import PageNotFound from "../page-not-found";
import { HomePage, AddContactPage, ContactPage } from "../pages";

// React Notification
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";

class App extends Component {
  state = { query: "" };

  onChangeQuery = query => {
    this.setState({ query });
  };

  render() {
    return (
      <div className="app">
        <Header onChangeQuery={this.onChangeQuery} />
        <NotificationContainer />
        <Switch>
          <Route
            path="/"
            render={() => {
              return <HomePage query={this.state.query} />;
            }}
            exact
          />
          <Route path="/add-contact" component={AddContactPage} />
          <Route path="/contacts/:id" component={ContactPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
