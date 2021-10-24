import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render } from "react-dom";
import Travel from "./components/Travel.js";
import Plant from "./components/Plant.js";
import { travelReducer } from "./reducers/index.js";
import { travelActionCreator } from "./actions/travel.js";
import "./index.css";

const store = createStore(
    travelReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => console.log(store.getState()));

fetch("http://localhost:3000/travel")
.then(response => response.json())
.then (json =>{
    store.dispatch(travelActionCreator(json.travel))
});


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
