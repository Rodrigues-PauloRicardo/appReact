import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Herder';
import Footer from './components/Footer';

import Routes from './rotas';

import './App.css';


function App() {
  return ( 
      
       <BrowserRouter>

       <Header/> 

     <Routes />
       
       <Footer />

      </BrowserRouter>
  );
}

export default App;
