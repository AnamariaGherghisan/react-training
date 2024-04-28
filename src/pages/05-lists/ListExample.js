import { PageInfo } from "../../components/PageInfo";

const App = () => {
  const languages = [
    {
      title: "Hello, HTML!!",
      subTitle: "This banner element is rendered using only HTML and CSS.",
    },
    {
      title: "Hello, jQuery!!",
      subTitle: "This banner element is rendered using jQuery and CSS.",
    },
    {
      title: "Hello, React!!",
      subTitle: "This banner element is rendered using React and CSS.",
    },
  ];

  const Jumbotron = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        <h4>{props.subTitle}</h4>
      </div>
    );
  };

  return (
    <div className="container">
      {languages.map((language) => {
        return (
          <Jumbotron
            title={language.title}
            subTitle={language.subTitle}
            key={language.title}
          />
        );
      })}
    </div>
  );
};

export const ListExample = ({ title, pathPrefix }) => (
  <PageInfo
    title={title}
    pathPrefix={pathPrefix}
    playground={<App />}
    showPreviewButton
    code={`const App = () => {
  const languages = [
    {
      title: "Hello, HTML!!",
      subTitle: "This banner element is rendered using only HTML and CSS.",
    },
    {
      title: "Hello, jQuery!!",
      subTitle: "This banner element is rendered using jQuery and CSS.",
    },
    {
      title: "Hello, React!!",
      subTitle: "This banner element is rendered using React and CSS.",
    },
  ];
  
  const Jumbotron = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        <h4>{props.subTitle}</h4>
      </div>
    );
  };
  
  return (
    <div className="container">
      {languages.map((language) => {
        return (
          <Jumbotron
            title={language.title}
            subTitle={language.subTitle}
            key={language.title}
          />
        );
      })}
    </div>
  );
};
    `}
  />
);
