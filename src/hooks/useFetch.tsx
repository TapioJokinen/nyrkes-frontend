import { useState, useEffect } from 'react';

const useFetch = (service: (...args: any[]) => Promise<Response>, args: any[]) => {
  const [data, setData] = useState<any>(null);
  const [status, setStatus] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [ok, setOk] = useState<boolean>(false);

  useEffect(() => {
    const apicall = async () => {
      setIsLoading(true);

      try {
        const response = await service(...args);
        setData(await response.json());
        setError(!response.ok);
        setOk(response.ok);
        setStatus(response.status);
      } catch (e) {
        setData(e);
        setError(true);
        setOk(false);
      }

      setIsLoading(false);
    };

    apicall();
  }, []);

  return {
    data,
    status,
    isLoading,
    ok,
    error,
  };
};

export default useFetch;
