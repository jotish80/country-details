import React from 'react';
 import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Country from './components/Home/Country/Country';
import NotFound from './components/NotFound/NotFound';
import CountryDetails from './components/Countrydetails/CountryDetails';
function App() {
  return (
  <Router>
     <Switch>
       <Route path="/home">
       <Home></Home>
       </Route>
       {/* <Route path="/country/:countryCode">
        <CountryDetails/> 
       </Route> */}
       <Route path="/about">
        <Country></Country>
       </Route>
       <Route path ="/countryDetails/:countryCode">
         <CountryDetails></CountryDetails>
       </Route>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route path="*">
        <NotFound></NotFound>
       </Route>
     </Switch> 
  </Router>
  );
}

export default App;
