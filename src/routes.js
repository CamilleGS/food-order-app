import React from "react";

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Home from './containers/home'
import Order from './containers/order'


function myRoutes(){
return(
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/orders" element={<Order/>}/>
        </Routes>
    </Router>
)


}

export default myRoutes