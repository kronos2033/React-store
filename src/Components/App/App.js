import './App.css';
import Header from '../Header/Header';
import ProductList from '../ProductList/ProductList';
import Footer from '../Footer/Footer';
import Purchases from '../Purchases/Purchases';
import { getProductData } from '../../utils/mainApi';
import { useState, useEffect } from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Preloader from '../Preloader/Preloader'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [initialProducts, setInitialProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    getProductData().then((data) => {
      setIsLoading(false)
      setInitialProducts(data)});
  }, []);
  return (
    <Router>
      <div className='wrapper'>
        <Header />
        <Switch>
          <Route exact path='/'>
          { isLoading? <Preloader/> : <ProductList products={initialProducts}/>}
          </Route>
          <Route path='/about'>
            <AboutUs />
          </Route>
          <Route path='/purchases'>
            <Purchases />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

//TODO
