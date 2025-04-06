import { useEffect, useState } from "react";
import { ENV } from "~/environment/environment_local";
import { UseFetchOptions } from "~/types/interface/useFetch_interface";

export function useFetch<T = unknown>(
  url: string,
  method: string,
  options: UseFetchOptions
):[T,boolean,string |null]{
  const [data, setData] = useState<T>({} as T);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const {
    token,
    body,
    parameter_1 = '',
    parameter_2 = ''
  } = options;

  useEffect(() => {
    const getFetchUrl = () => {
      return ENV.API + url + (parameter_1 ?? "") + (parameter_2 ?? "");
    };

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(getFetchUrl(), {
          method: method,
          headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
          },
          ...(method !== "GET" && body && { body: JSON.stringify(body) }),
        });
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
            setError(err.message);
          } else {
            setError(String(err));
          }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token, method, body, parameter_1, parameter_2, url]);
  return [data, loading, error];
}
