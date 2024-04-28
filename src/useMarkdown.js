import { useEffect, useState } from "react";

export const useMarkdown = (file) => {
  const [markdown, setMarkdown] = useState();
  const [hasError, setHasError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(file);
        const text = await response.text();

        setHasError("");
        setMarkdown(text);
      } catch {
        setMarkdown();
        setHasError(`# Failed to load markdown`);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [file]);

  return { markdown, isLoading, hasError };
};
