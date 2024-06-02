import { Component } from "react";
import { PageInfo } from "../../components/PageInfo";

class Banner extends Component {
  constructor(props) {
    super(props);

    console.log("class this", this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("function this", this);
  }

  render() {
    return (
      <div>
        <h1>Title</h1>
        <h2>Sub-title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          consequuntur velit harum necessitatibus officia consectetur quae vel
          maiores, quos eius libero optio eaque possimus, nesciunt enim minus
          nisi ipsum sint.
        </p>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export const ClassBasedComponentExample = ({ title, pathPrefix }) => (
  <PageInfo
    title={title}
    pathPrefix={pathPrefix}
    playground={<Banner />}
    showPreviewButton
    code={`class Banner extends Component {
  constructor(props) {
    super(props);

    console.log("class this", this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("function this", this);
  }

  render() {
    return (
      <div>
        <h1>Title</h1>
        <h2>Sub-title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          consequuntur velit harum necessitatibus officia consectetur quae vel
          maiores, quos eius libero optio eaque possimus, nesciunt enim minus
          nisi ipsum sint.
        </p>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}`}
  />
);
