import React, { Fragment, useState } from "react";

import { evalMath } from "eval-math";

import "./Calculator.css";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const ops = ["+", "-", "*", "/", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && display === "") ||
      (ops.includes(value) && ops.includes(display.slice(-1)))
    ) {
      return;
    }

    setDisplay(display + value);
  };

  const calcDisplay = () => {
    setDisplay(evalMath(display).toString());
  };

  return (
    <Fragment>
      <div className="display">{display}</div>
      <div className="gridi">
        <button onClick={() => updateCalc("1")}>1</button>
        <button onClick={() => updateCalc("2")}>2</button>
        <button onClick={() => updateCalc("3")}>3</button>
        <button onClick={() => updateCalc("4")}>4</button>
        <button onClick={() => updateCalc("5")}>5</button>
        <button onClick={() => updateCalc("6")}>6</button>
        <button onClick={() => updateCalc("7")}>7</button>
        <button onClick={() => updateCalc("8")}>8</button>
        <button onClick={() => updateCalc("9")}>9</button>
        <button onClick={() => updateCalc("0")}>0</button>
        <button onClick={() => updateCalc(".")}>.</button>
        <button onClick={calcDisplay}>=</button>
      </div>
      <div className="gridi">
        <button onClick={() => updateCalc("+")}>+</button>
        <button onClick={() => updateCalc("-")}>-</button>
        <button onClick={() => updateCalc("*")}>*</button>
        <button onClick={() => updateCalc("/")}>/</button>
      </div>
      <div className="clear" onClick={() => setDisplay("")}>
        Clear
      </div>
    </Fragment>
  );
};

export default Calculator;
