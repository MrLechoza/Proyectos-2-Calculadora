import { useState } from "react";
import "./App.css";

function Calculadora() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState(0);

  const handleClick = (value) => {
    if (value === "=") {
      handleIgual();
    } else if (value === "C") {
      handleClear();
    } else {
      setDisplay(display + value);
    }
  };

  const handleIgual = () => {
    try {
      const result = eval(display);
      setResult(result);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  const handleClear = () => {
    setDisplay("");
    setResult(0);
  };

  return (
    <body>
      <main>
        <header>
          <h1>Calculadora</h1>
        </header>
        <section className="display">
          <input
            type="text"
            id="display"
            value={display}
            placeholder="Calculadora"
          />
        </section>
        <section className="keys">
          <br />
          <button id="seven" onClick={() => handleClick("7")}>
            7
          </button>
          <button id="eight" onClick={() => handleClick("8")}>
            8
          </button>
          <button id="nive" onClick={() => handleClick("9")}>
            9
          </button>
          <button id="divide" onClick={() => handleClick("/")}>
            %
          </button>
          <br />
          <button id="four" onClick={() => handleClick("4")}>
            4
          </button>
          <button id="five" onClick={() => handleClick("5")}>
            5
          </button>
          <button id="six" onClick={() => handleClick("6")}>
            6
          </button>
          <button id="multiply" onClick={() => handleClick("*")}>
            x
          </button>
          <br />
          <button id="one" onClick={() => handleClick("1")}>
            1
          </button>
          <button id="two" onClick={() => handleClick("2")}>
            2
          </button>
          <button id="three" onClick={() => handleClick("3")}>
            3
          </button>
          <button id="subtract" onClick={() => handleClick("-")}>
            -
          </button>

          <br />
          <button id="zero" onClick={() => handleClick("0")}>
            0
          </button>
          <button id="decimal" onClick={() => handleClick(".")}>
            .
          </button>
          <button id="add" onClick={() => handleClick("+")}>
            +
          </button>

          <br />
          <button id="clear" onClick={() => handleClick("C")}>
            Borrar
          </button>
          <button id="equals" onClick={() => handleClick("=")}>
            =
          </button>
        </section>
      </main>
    </body>
  );
}

export default Calculadora;
