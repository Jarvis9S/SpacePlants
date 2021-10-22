import React from "react";
import {render} from "react-dom";
import Travel from "./components/Travel.js";

render(
    <div>
        <h2>Plants from React!</h2>
        <Travel />
    </div>,
    document.getElementById("root")
);
