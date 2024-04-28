import { PageInfo } from "../../components/PageInfo";

const Banner = () => {
  return (
    <div>
      <h1>Title</h1>
      <h2>Sub-title</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        consequuntur velit harum necessitatibus officia consectetur quae vel
        maiores, quos eius libero optio eaque possimus, nesciunt enim minus nisi
        ipsum sint.
      </p>
    </div>
  );
};

export const ComponentExample = ({ title, pathPrefix }) => (
  <PageInfo
    title={title}
    pathPrefix={pathPrefix}
    playground={<Banner />}
    showPreviewButton
    code={`const Banner = () => {
  return (
    <div>
      <h1>Title</h1>
      <h2>Sub-title</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};
    `}
  />
);
