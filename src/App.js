import React from "react";
import "./App.css";
import { Calculator } from "./Calculator/Calculator";
import { Output } from "./Calculator/Output";

class App extends React.Component {
  state = {
    result: "",
  };
  buttonPressed = (buttonName) => {
    if (buttonName === "=") {
      this.calculate();
    } else if (buttonName === "c") {
      this.reset();
    } else if (buttonName === "ce") {
      this.backspace();
    } else
      this.setState({
        result: this.state.result + buttonName,
      });
  };
  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };
  reset = () => {
    this.setState({
      result: "",
    });
  };

  calculate = () =>
    this.setState({
      result: eval(this.state.result),
      catch(e) {
        this.setState({
          result: "error",
        });
      },
    });

  render() {
    return (
      <div className="App">
        <h1> Calculator</h1>
        <div className="main">
          <h1>Hello World</h1>
          <Output result={this.state.result} />
          <Calculator buttonPressed={this.buttonPressed} />
        </div>
      </div>
    );
  }
}

export default App;
