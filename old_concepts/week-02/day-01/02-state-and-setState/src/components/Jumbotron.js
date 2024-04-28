import { Component } from "react";

export class Jumbotron extends Component {
  constructor(props) {
    super(props);

    this.state = { mode: "success" };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState({
      mode: this.state.mode === "success" ? "danger" : "success",
    });
  }

  render() {
    return (
      <div className="jumbotron">
        <div className="title">Hello, React!!</div>
        <div className="sub-title">
          This banner element is rendered using React and CSS.
        </div>
        <div className="p-3">
          <button
            className={`btn btn-${this.state.mode}`}
            onClick={this.handleButtonClick}
          >
            Toggle Button
          </button>
        </div>
      </div>
    );
  }
}
