import './App.css';

// LINKS DE LIGAÇÃO ENTRE AS PÁGINAS DA SINGLE PAGE APPLICATION (SPA)
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// NAVBAR
import Header from "./Components/Header/index";
import DynaPredict from "./Pages/DynaPredict/index";

// PÁGINAS
import Home from "./Pages/Home/index";




function App() {
  return (
      <Router>
        <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/dynapredict" component={DynaPredict} exact />
          </Switch>
      </Router>
  );
}

export default App;
