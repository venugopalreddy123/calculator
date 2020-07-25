import React from "react";
import "./Styles.css";
export class Output extends React.Component {
  render() {
    return (
      <div className="output-result">
        <p>{this.props.result}</p>
      </div>
    );
  }
}
