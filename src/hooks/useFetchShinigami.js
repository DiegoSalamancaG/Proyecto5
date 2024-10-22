import { useEffect, useState } from "react";
import { fetchBleachShinigami } from "../services/apiBleach";

export const useFetchShinigami = () => {
  const [bleachs, setBleachs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const dataBleach = await fetchBleachShinigami();
        setBleachs(dataBleach.content);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);
  if (error) {
    throw error;
  }

  return { bleachs, loading };
};
