import { useEffect, useState } from "react";
import { PageInfo } from "../../components/PageInfo";
import axios from "axios";

const ApiExample = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await axios.get("https://api.github.com/users/meta");

        if (response.status !== 200) {
          setError(true);
          setData();
          setLoading(false);
        }

        if (response.data) {
          setError(false);
          setData(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error.message);
        setError(true);
        setData();
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading && "Loading..."}

      {error && "Oops error..."}

      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export const UseEffectExample = ({ title, pathPrefix }) => (
  <PageInfo
    title={title}
    pathPrefix={pathPrefix}
    playground={<ApiExample />}
    showPreviewButton
    code={`const ApiExample = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          "https://api.github.com/users/meta"
        );

        if (response.status !== 200) {
          setError(true);
          setData();
          setLoading(false);
        }

        if (response.data) {
          setError(false);
          setData(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error.message);
        setError(true);
        setData();
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading && "Loading..."}

      {error && "Oops error..."}

      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};
    `}
  />
);
