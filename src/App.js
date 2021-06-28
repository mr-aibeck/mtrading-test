import './App.sass'
import DepositePage from './pages/DepositePage'
import SuccessPage from './pages/SuccessPage'

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="content">
        <Router basename={`${process.env.PUBLIC_URL}/`}>
          <Route exact path="/">
            <DepositePage />
          </Route>
          <Route path="/success">
            <SuccessPage />
          </Route>
        </Router>
      </div>
    </div>
  );
}

export default App
