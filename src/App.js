import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Search from './pages/search/Search';

function App() {
  return (
    <div className="app">

      <Router >
    <Header />

        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/search" exact component={Search}/>
        </Switch>
      <Footer />

      </Router>

     
    </div>
  );
}

export default App;
