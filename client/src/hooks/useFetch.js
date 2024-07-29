import { useEffect, useState, useCallback } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (endpoint) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const makeApiCall = useCallback(async () => {
        try {
            const res = await fetchDataFromApi(endpoint);
            setData(res);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }, [endpoint]);

    useEffect(() => {
        makeApiCall();
    }, [makeApiCall]);

    return { data, loading, error };
};

export default useFetch;
