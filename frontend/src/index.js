import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { render } from "react-dom";
import thunk from "redux-thunk";
import Travel from "./components/Travel.js";
import Plant from "./components/Plant.js";
import rootReducer from "./reducers";
import "./index.css";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
);

render(
    <Provider store={store}>
    <div>
        <h2>Plants in space!</h2>
        <Travel />
        <Plant />
    </div>
    </Provider>,
    document.getElementById("root")
);
