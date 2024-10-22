import { useEffect, useState } from "react";
import { fetchBleachQuincy } from "../services/apiBleach";

export const useFetchQuincy = () => {
  const [bleachs, setBleachs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const dataBleach = await fetchBleachQuincy();
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
