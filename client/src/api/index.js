import { useEffect, useState } from "react";

const useData = (path) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/${path}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setData(null);
        setLoading(false);
      });
  }, [path]);

  return [data, loading];
};

export { useData };
