import './App.css';
import Header from '../Header/Header';
import ProductList from '../ProductList/ProductList';
import Footer from '../Footer/Footer';
import Purchases from '../Purchases/Purchases';
import AboutUs from '../AboutUs/AboutUs'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
      <Router>
      <div className='wrapper'>
        <Header />
        <Switch>
          <Route exact path='/'>
            <ProductList />
          </Route>
          <Route path='/about'>
            <AboutUs />
          </Route>
          <Route path="purchases">
            <Purchases/>
          </Route>
        </Switch>
        <Footer />
        </div>
      </Router>
  );
}

export default App;

//TODO
