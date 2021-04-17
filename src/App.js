import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from './Components/Login/Login';
import Error from './Components/Error/Error';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Register from './Components/Register/Register';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Orders from './Components/Orders/Orders';
import Admin from './Components/Admin/Admin';
import AddProduct from './Components/AddProduct/AddProduct';
import ManageProduct from './Components/ManageProduct/ManageProduct';
import OrderPreview from './Components/OrderPreview/OrderPreview';
import Thank from './Components/Thank/Thank';
import SelectProduct from './Components/SelectProduct/SelectProduct';
import Homepage from './Components/Home/Homepage/Homepage';
import Navbar from './Components/Home/Navbar/Navbar';
import BuyProducts from './Components/BuyProducts/BuyProducts';
import Dashboardpage from './Components/Dashboard/Dashboardpage/Dashboardpage';
import ServiceBooking from './Components/Dashboard/ServiceBooking/ServiceBooking';
import ServiceList from './Components/Dashboard/ServiceList/ServiceList';
import Feedback from './Components/Dashboard/Feedback/Feedback';
import AddService from './Components/Dashboard/AddService/AddService';
import AddAdmin from './Components/Dashboard/AddAdmin/AddAdmin';
import OrderList from './Components/Dashboard/OrderList/OrderList';
import ManageService from './Components/Dashboard/ManageService/ManageService';
import SelectService from './Components/Dashboard/SelectService/SelectService';



export const UserContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Homepage></Homepage>
          </Route>
          <Route path="/home">
            <Homepage></Homepage>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboardpage></Dashboardpage>
          </PrivateRoute>
          <PrivateRoute path="/serviceList">
            <ServiceList></ServiceList>
          </PrivateRoute>
          <PrivateRoute path="/feedback">
            <Feedback></Feedback>
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path="/orderList">
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path="/manageService">
            <ManageService></ManageService>
          </PrivateRoute>
          <PrivateRoute path="/serviceBooking/:id">
            <ServiceBooking></ServiceBooking>
          </PrivateRoute>
          <PrivateRoute path="/serviceBooking">
            <SelectService></SelectService>
          </PrivateRoute>
          <Route path="/buyProducts">
            <BuyProducts></BuyProducts>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          
          <PrivateRoute path="/orders/:id">
            <Orders></Orders>
          </PrivateRoute>
          {/* <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute> */}
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <PrivateRoute path="/addProduct">
            <AddProduct></AddProduct>
          </PrivateRoute>
          <PrivateRoute path="/manageProduct">
            <ManageProduct></ManageProduct>
          </PrivateRoute>
          <PrivateRoute path="/orderPreview">
            <OrderPreview></OrderPreview>
          </PrivateRoute>
          <PrivateRoute path="/thank">
            <Thank></Thank>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <SelectProduct></SelectProduct>
          </PrivateRoute>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
