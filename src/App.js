import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PrivateRoute from "./Auth";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./components/Customer/Cart";
import { Provider } from "react-redux";
import store from "./redux/store";
import Restaurant from "./components/Customer/Restaurant";

import Language from "./LanguageContext";
export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Language.Provider language='hindi'>
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
                  <Link to="/signup">Signup</Link>
                </li>
              </ul>
            </nav>
            {
              false ? <div>True rendered</div> : <div>False Rendered</div>
            }
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
              <Route index element={<Restaurant />} />
            </Routes>
          </div>
        </Language.Provider>
      </BrowserRouter>
    </Provider>
  );
}
