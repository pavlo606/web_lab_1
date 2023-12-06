import React from "react";
import { Provider } from "react-redux";
import { store } from "../Cart/store";
import Navigation from "../Navigation/Navigation";
import Footer from "./Footer/Footer";

function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <Footer />
    </Provider>
  );
}

export default App;
