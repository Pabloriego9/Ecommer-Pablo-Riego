import "./App.css";
import React from "react";
import NavBar from "./component/NavBar/NavBar";
import ItemListContainer from "./container/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./container/ItemDetailContainer"
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/categoria/:nombreCategoria">
            <ItemListContainer />
          </Route>
          <Route exact path="/producto/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;
