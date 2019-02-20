import { useState, useEffect } from "react";
import axios from "axios";

async function fetchResponse(url, id, setLoading, setResponse, setError) {
  setError(null);
  try {
    setLoading(true);
    const res = await axios.get(url + id);
    setResponse(res);
  } catch (e) {
    setError(e);
  }
  setLoading(false);
}

function useRequestExampleState(initialUrl, initialId) {
  const [url, setUrl] = useState(initialUrl);
  const [id, setId] = useState(initialId);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchResponse(url, id, setLoading, setResponse, setError);
  }, [url, id]);

  return {
    url,
    id,
    setId,
    setUrl,
    response,
    loading,
    error
  };
}

export default useRequestExampleState;
