import * as React from "react";
import {render} from "react-dom";
import App from "./components/page/App";

const Index: React.FC = () => {
    return (
        <React.Fragment>
            Hello!
            <App />
        </React.Fragment>
    )
}

render(<Index />, document.getElementById("root"));