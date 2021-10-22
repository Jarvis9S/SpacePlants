import React from "react";
import {render} from "react-dom";
import Travel from "./components/Travel.js";
import Plant from "./components/Plant.js";


render(
    <div>
        <h2>Plants from React!</h2>
        <Travel />
        <Plant />
    </div>,
    document.getElementById("root")
);
