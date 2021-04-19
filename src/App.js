import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createContext } from 'react';
import { useState } from 'react';
import Home from './component/Home/Home/Home';
import Login from './component/Login/Login'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min'
import NavBar from './component/ShareComponent/Navber/NavBar';
import Footer from './component/ShareComponent/Footer/Footer';
import Admin from './component/Abmin/Admin/Admin';
import ServiceDetelce from './component/Service/ServiceDetelce/ServiceDetelce';
import MyService from './component/Service/MyService/MyService';
import AddReview from './component/Review/AddReview';
import Profile from './component/Profile/Profille/Profile';
import PrivateRoute from './component/PrivetRoute/PrivetRoute'



export const UserContext = createContext();
function App() {
  const [loginUser, setLoginUser] = useState({})
  return (
    <UserContext.Provider value = {[loginUser, setLoginUser]}>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/admin" exact>
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/login" exact>
            <Login></Login>
          </Route>
          <PrivateRoute path="/events/:_id">
            <ServiceDetelce></ServiceDetelce>
          </PrivateRoute>
          <PrivateRoute path="/service">
            <MyService></MyService>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute path="/Profile">
            <Profile loginUser={loginUser}></Profile>
          </PrivateRoute>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
