import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PrivateRoute from "./Auth";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./components/Customer/Cart";
import { Provider } from "react-redux";
import  store from './redux/store'


export default function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="cart"
            element={
              <PrivateRoute roles={["Admin"]}>
                <Cart />
              </PrivateRoute>
            }
          />
          <Route index element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
    </Provider>
  );
}
