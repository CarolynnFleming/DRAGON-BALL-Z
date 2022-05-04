import { Route, Switch, BrowserRouter as Router  } from "react-router-dom";
import Detail from './views/Characters/Detail';
import List from './views/Characters/List';

export default function App() {
  return(
    <Router>
      <Switch>
        <Route path="/characters/:id">
          <Detail />
        </Route>
        <Route path="/">
          <List />
        </Route>
      </Switch>
    </Router>
  )
}
