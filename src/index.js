import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Operation from "./components/Context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Operation {...{ val: 0 }} />
  </StrictMode>,
  rootElement
);
