import React from "react";
import {render} from "react-dom";
import Travel from "./components/Travel.js";
import Plant from "./components/Plant.js";
import "./index.css";

render(
    <div>
        <h2>Plants in space!</h2>
        <Travel />
        <Plant />
    </div>,
    document.getElementById("root")
);
