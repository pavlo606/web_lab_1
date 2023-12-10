import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

import Navigation from "../Navigation/Navigation";
import Footer from "./Footer/Footer";
import { store, persistor } from "../Cart/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
        <Footer />
      </PersistGate>
    </Provider>
  );
}

export default App;
