import React from "react";

import "./App.css";
import { Store } from "./Action/Store";
import { Provider } from "react-redux";
import DEmployees from "./Component/DEmployees";
import Comoncomp from "./Component/Comoncomp";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Provider store={Store}>
      <Container maxWidth="lg">
        <Comoncomp />
      </Container>
    </Provider>
  );
}

export default App;
