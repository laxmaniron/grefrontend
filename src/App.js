import logo from './logo.svg';
import Vocabs from "./components/Vocabs"
import Header from "./components/Header"
import AddWord from "./components/AddWord"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { Provider } from './context';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom" 


function App() {
  return (
    <Provider>
      
      <Router>
    <div className="App">
     <Header/>
     
      

      <Switch>
        <Route exact path = "/" component = {Vocabs} />
        <Route exact path = "/word/add" component = {AddWord} />
      </Switch>
     
    </div>
    </Router>

    </Provider>
  );
}

export default App;
