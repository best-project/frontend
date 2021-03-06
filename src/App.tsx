import React from "react";
import { Provider } from "react-redux";
import store from "./app.store";
import AppContainer from "app.container";

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
