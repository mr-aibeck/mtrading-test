import './App.sass'
import DepositePage from './pages/DepositePage'
import SuccessPage from './pages/SuccessPage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="content">
        <Router>
          <Switch>
            <Route exact path="/">
              <DepositePage />
            </Route>
            <Route path="/success">
              <SuccessPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App
