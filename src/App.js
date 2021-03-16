import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route path="/create" component={Create} />
      </Switch>
    </Router>
  );
}

export default App;
