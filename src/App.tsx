import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from './components/Form/Form';
import Thankyou from './components/Form/Thankyou';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={ <Form/> }/>        
          <Route path='/thankyou' element={ <Thankyou/>}/>        
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
