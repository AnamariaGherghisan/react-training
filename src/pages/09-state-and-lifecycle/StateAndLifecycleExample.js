import { Component } from "react";
import { PageInfo } from "../../components/PageInfo";

class Jumbotron extends Component {
  constructor(props) {
    console.log("constructor");

    super(props);

    this.state = { mode: "success", isVisible: true };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");

    setTimeout(this.handleButtonClick, 2000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");

    return true;
  }

  componentDidUpdate(previousProps, previousState) {
    console.log("componentDidUpdate");

    console.log("previousProps", previousProps);

    console.log("previousState", previousState);

    console.log("currentProps", this.props);

    console.log("currentState", this.state);
  }

  handleButtonClick() {
    this.setState((state) => {
      return {
        mode: state.mode === "success" ? "danger" : "success",
      };
    });
  }

  render() {
    console.log("render");

    if (this.state.isVisible) {
      return (
        <div className="jumbotron" id="jumbotron">
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

          <div className="p-3">
            <button
              className={"btn btn-danger"}
              onClick={this.props.handleUnmount}
            >
              Umount Jumbotron
            </button>
          </div>
        </div>
      );
    }

    return null;
  }
}

export const StateAndLifecycleExample = ({ title, pathPrefix }) => (
  <PageInfo
    title={title}
    pathPrefix={pathPrefix}
    playground={<Jumbotron />}
    showPreviewButton
    code={`class Jumbotron extends Component {
  constructor(props) {
    console.log("constructor");

    super(props);

    this.state = { mode: "success", isVisible: true };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount");

    setTimeout(this.handleButtonClick, 2000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");

    return true;
  }

  componentDidUpdate(previousProps, previousState) {
    console.log("componentDidUpdate");

    console.log("previousProps", previousProps);

    console.log("previousState", previousState);

    console.log("currentProps", this.props);

    console.log("currentState", this.state);
  }

  handleButtonClick() {
    this.setState((state) => {
      return {
        mode: state.mode === "success" ? "danger" : "success",
      };
    });
  }

  render() {
    console.log("render");

    if (this.state.isVisible) {
      return (
        <div className="jumbotron" id="jumbotron">
          <div className="title">Hello, React!!</div>

          <div className="sub-title">
            This banner element is rendered using React and CSS.
          </div>

          <div className="p-3">
            <button
              className={\`btn btn-\${this.state.mode}\`}
              onClick={this.handleButtonClick}
            >
              Toggle Button
            </button>
          </div>

          <div className="p-3">
            <button
              className={"btn btn-danger"}
              onClick={this.props.handleUnmount}
            >
              Umount Jumbotron
            </button>
          </div>
        </div>
      );
    }

    return null;
  }
}`}
  />
);
