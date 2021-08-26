import './App.css';
import React from 'react';
import Header from '../Header/Header';
import ProductList from '../ProductList/ProductList';
import Footer from '../Footer/Footer';
import Purchases from '../Purchases/Purchases';
import { getProductData } from '../../utils/mainApi';
import { useState, useEffect } from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Preloader from '../Preloader/Preloader';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [initialProducts, setInitialProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [purchaseList, setPurchaseList] = useState([]);
  const purchaseCounter = purchaseList.length;

  useEffect(() => {
    setIsLoading(true);
    const initialPurchase = JSON.parse(localStorage.getItem('purchaseList'));
    setPurchaseList(initialPurchase);
    getProductData().then((data) => {
      setIsLoading(false);
      setInitialProducts(data);
    });
  }, []);

  const addProduct = (img, title, price, id, count) => {
    setPurchaseList((purchaseList) => {
      const newItem = { title, price, img, id, count };
      const items = [...purchaseList, newItem];
      localStorage.setItem('purchaseList', JSON.stringify(items));
      return items;
    });
  };

  const deletePurchase = (id) => {
    setPurchaseList((purchaseList) => {
      const idx = purchaseList.findIndex((el) => el.id === id);
      const items = [
        ...purchaseList.slice(0, idx),
        ...purchaseList.slice(idx + 1),
      ];
      localStorage.setItem('purchaseList', JSON.stringify(items));
      return items;
    });
  };

  return (
    <Router>
      <div className='wrapper'>
        <Header counter={purchaseCounter} />
        <Switch>
          <Route exact path='/'>
            {isLoading ? (
              <Preloader />
            ) : (
              <ProductList
                products={initialProducts}
                addProduct={addProduct}
                purchaseList={purchaseList}
              />
            )}
          </Route>
          <Route path='/about'>
            <AboutUs />
          </Route>
          <Route path='/purchases'>
            <Purchases
              purchaseList={purchaseList}
              deletePurchase={deletePurchase}
            />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

//TODO shadow in header, cart with price, count, gitLens
