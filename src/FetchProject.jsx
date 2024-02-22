import { createClient } from "contentful";
import { useState, useEffect } from "react";

var client = createClient({
  space: "5umuz5iagm7j",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });

      var projects = response.items.map((item) => {
        const { image, title, url } = item.fields;
        const id = item.sys.id;
        const imgUrl = image?.fields?.file?.url;
        return { imgUrl, title, url, id };
      });

      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};

export default useFetchProjects;
