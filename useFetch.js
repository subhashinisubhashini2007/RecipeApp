import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'


function useFetch(url) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!url) return;
            setLoading(true);
            setError("");
            axios.get(url)
                .then((response) => {
                    setData(response.data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError(err.message);
                    setLoading(false);
                });

        
},[url]);

    return { data, loading, error };
}

export default useFetch;