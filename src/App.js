import React from 'react';
import './App.css';
import Products from './Components/ProductsPage/Products';
import Navbar from './Components/Navabar/Navbar';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Filters from './Components/Filter/Filter';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Filters />
      <Footer />
      
    </div>
  );
}

export default App;
