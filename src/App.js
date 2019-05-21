import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { Text, MyButton } from './component';

let initialStore = {
  count: 0,
};
const store = createStore(rootReducer, initialStore);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Text />
        <MyButton />
      </div>
    </Provider>
  );
}

export default App;
