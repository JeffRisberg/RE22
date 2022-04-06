import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';

import {store} from './store';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App"
import Home from "./pages/Home";
import Items from "./pages/Items";
import Events from "./pages/Events";

ReactDOM.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/items' element={<Items/>}/>
          <Route path='/events' element={<Events/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    {/* </React.StrictMode> */}
  </Provider>,
  document.getElementById('root')
);
