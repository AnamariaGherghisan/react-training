import { Component } from "react";
import "./index.css";

export class RandomQuote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomQuote:
        this.props.quotes[Math.floor(Math.random() * this.props.quotes.length)],
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState((state) => {
      return {
        randomQuote: this.props.quotes[Math.floor(Math.random() * this.props.quotes.length)]
      };
    });
  }

  render() {
    return (
      <div className="jumbotron" id="jumbotron">
        <div className="title">Random Quote</div>

        <button className="btn btn-success" onClick={this.handleButtonClick}>
          Refresh
        </button>

        <div className="sub-title">{this.state.randomQuote}</div>
      </div>
    );
  }
}
