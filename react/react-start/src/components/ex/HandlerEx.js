import { Component } from "react";

export default class HanedlerEx extends Component {
  state = {
    text: "Hello World!",
  };

  render() {
    const { text } = this.state;
    return (
      <div>
        <p>{text}</p>
        <button
          onClick={() => {
            this.setState({ text: "Goodbye World!" });
          }}
        >
          클릭
        </button>
      </div>
    );
  }
}
