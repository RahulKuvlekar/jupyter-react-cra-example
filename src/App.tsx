import React from "react";
import "./App.css";
import { Notebook, Jupyter } from "@datalayer/jupyter-react";

function App() {
  return (
    <div className="App">
      <Jupyter
        startDefaultKernel={true}
        jupyterServerHttpUrl="https:://tljh.univ.ai"
        jupyterServerWsUrl="wss://tljh.univ.ai"
        jupyterToken="8f8ae2b9a9434fbb992138875741cf6c"
      >
        <Notebook path="./test.ipynb" />
      </Jupyter>
    </div>
  );
}

export default App;
