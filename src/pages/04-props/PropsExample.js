import { PageInfo } from "../../components/PageInfo";

const App = () => {
  const Jumbotron = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        <h4>{props.subTitle}</h4>
      </div>
    );
  };

  return (
    <div>
      <Jumbotron
        title="Hello, HTML!!"
        subTitle="This banner element is rendered using only HTML."
      />

      <Jumbotron
        title="Hello, jQuery!!"
        subTitle="This banner element is rendered using jQuery."
      />

      <Jumbotron
        title="Hello, React!!"
        subTitle="This banner element is rendered using React."
      />
    </div>
  );
};

export const PropsExample = ({ title, pathPrefix }) => (
  <PageInfo
    title={title}
    pathPrefix={pathPrefix}
    playground={<App />}
    showPreviewButton
    code={`const App = () => {
  const Jumbotron = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        <h4>{props.subTitle}</h4>
      </div>
    );
  };

  return (
    <div>
      <Jumbotron
        title="Hello, HTML!!"
        subTitle="This banner element is rendered using only HTML."
      />

      <Jumbotron
        title="Hello, jQuery!!"
        subTitle="This banner element is rendered using jQuery."
      />

      <Jumbotron
        title="Hello, React!!"
        subTitle="This banner element is rendered using React."
      />
    </div>
  );
};
    `}
  />
);
