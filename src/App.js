import React from 'react';
import logo from './logo.svg';
import './App.css';

import Ctx from "./context/context";
import Dec from "./components/Dec";
import Inc from "./components/Inc";
import Mul2 from "./components/Mul2";
import Mul3 from "./components/Mul3";
import Mul4 from "./components/Mul4";
import Mul6 from "./components/Mul6";

function App() {
  return (
    <div className="App">
      <Ctx.CtxProvider>
        <Inc />
        <Dec />
        <Mul2 />
        <Mul3 />
        <Mul4 />
        <Mul6 />
      </Ctx.CtxProvider>

    </div>
  );
}

export default App;
