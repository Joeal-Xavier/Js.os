import "./Calculator.css";
import React from "react";
class Calculator extends React.Component {
  state = {
    var1: "",
    var2: "",
    history: "",
  };
  operation = null;
  equalMode = false;
  varStyle = "";
  historyStyle = "";
  componentDidMount() {
    document.addEventListener("keydown", this._handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this._handleKeyDown);
  }
  render() {
    return this.renderContent();
  }
  setResult = (num) => {
    const { var1 } = this.state;
    if (var1.length > 10) {
      return;
    }
    if (num === "." && var1.includes(".")) {
      return;
    }
    this.setState({
      var1: var1.concat(num.toString()),
    });
  };
  _handleKeyDown = (e) => {
    const { key } = e;
    if (!isNaN(key)) {
      this.setResult(key);
    } else if (["+", "-", "*", "/", "%"].includes(key)) {
      this.operations(key);
    } else {
      switch (key) {
        case "Backspace":
          this.setState({ var1: this.state.var1.slice(0, -1) });
          break;
        case "Enter":
          this.equals();
          break;
        case "Delete":
          this.setState({ var1: "", var2: "", history: "" });
          break;

        default:
          break;
      }
    }
  };
  chaining(var1, var2, ops) {
    var result = var1;
    if (!var2) {
      return var1;
    }
    switch (ops) {
      case "+":
        result = +var1 + +var2;
        break;
      case "*":
        result = var1 * var2;
        break;
      case "-":
        result = var2 - var1;
        break;
      case "/":
        result = var2 / var1;
        break;
      case "%":
        result = (var2 / 100) * var1;
        break;
      default:
        result = "";
        break;
    }
    return result;
  }
  operations = (ops) => {
    const { var1, var2, history } = this.state;
    this.setState({
      var2: this.chaining(var1, var2, this.operation).toString(),
      var1: "",
      history: this.equalMode ? var1 + ops : history + var1 + ops,
    });
    this.operation = ops;
    this.equalMode = false;
  };
  equals() {
    const { var2, var1, history } = this.state;

    var result = 0;
    switch (this.operation) {
      case "+":
        result = +var1 + +var2;
        break;
      case "*":
        result = var1 * var2;
        break;
      case "-":
        result = var2 - var1;
        break;
      case "/":
        result = var2 / var1;
        break;
      case "%":
        result = (var2 / 100) * var1;
        break;
      case "CLR":
        result = +var1.slice(0, -1);
        break;
      default:
        result = var1;
    }
    this.operation = null;
    this.equalMode = true;
    this.setState({
      history: history + var1,
      var1: result.toString(),
      var2: "",
    });
  }

  renderContent() {
    const { var1, var2, history } = this.state;
    return (
      <div className="calcContainer">
        <div
          className="calc"
          style={
            this.props.maximize
              ? { height: "100%", width: "100%" }
              : { height: "500px", width: "350px" }
          }
        >
          <div className="resultBar">
            <div
              className="var2"
              style={history.length > 6 ? { fontSize: `0.5em` } : {}}
            >
              {history}
            </div>
            <div
              className="var1"
              style={var1.length > 6 ? { fontSize: `1em` } : {}}
            >
              {var1}
            </div>
          </div>
          <table className="keypad">
            <tr>
              <td
                className="keys"
                onClick={() =>
                  this.setState({ var1: "", var2: "", history: "" })
                }
              >
                AC
              </td>
              <td
                className="keys"
                onClick={() => this.setState({ var1: var1.slice(0, -1) })}
              >
                DEL
              </td>
              <td className="keys" onClick={() => this.operations("%")}>
                %
              </td>
              <td className="keys" onClick={() => this.operations("/")}>
                /
              </td>
            </tr>
            <tr>
              <td className="keys" onClick={() => this.setResult(7)}>
                7
              </td>
              <td className="keys" onClick={() => this.setResult(8)}>
                8
              </td>
              <td className="keys" onClick={() => this.setResult(9)}>
                9
              </td>
              <td className="keys" onClick={() => this.operations("*")}>
                x
              </td>
            </tr>
            <tr>
              <td className="keys" onClick={() => this.setResult(4)}>
                4
              </td>
              <td className="keys" onClick={() => this.setResult(5)}>
                5
              </td>
              <td className="keys" onClick={() => this.setResult(6)}>
                6
              </td>
              <td className="keys" onClick={() => this.operations("-")}>
                -
              </td>
            </tr>
            <tr>
              <td className="keys" onClick={() => this.setResult(1)}>
                1
              </td>
              <td className="keys" onClick={() => this.setResult(2)}>
                2
              </td>
              <td className="keys" onClick={() => this.setResult(3)}>
                3
              </td>
              <td className="keys" onClick={() => this.operations("+")}>
                +
              </td>
            </tr>
            <tr>
              <td
                className="keys"
                onClick={() => this.setResult(0)}
                colSpan="2"
              >
                0
              </td>
              <td className="keys" onClick={() => this.setResult(".")}>
                .
              </td>
              <td className="keys equals" onClick={() => this.equals()}>
                =
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
export default Calculator;
