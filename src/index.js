import { StrictMode } from "react";
import ReactDOM from "react-dom";
import allReducers from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Container } from "./Container";

const store = createStore(allReducers);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Container />
    </Provider>
  </StrictMode>,
  rootElement
);
