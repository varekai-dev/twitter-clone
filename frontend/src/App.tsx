import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
