import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
        .then(res => {
            if (!res.ok) {
                throw Error('Unable to fetch data.');
            }
            return res.json()
        })
            .then((data) => {
                setData(data);
                setPending(false);
                setError(null);
            })
            .catch((err) => {
                if(err.name === "AbortError")
                {
                    console.log('Fetch Aborted');
                }
                else
                {
                    setError(err.message);
                    setPending(false);
                }

            })
            return () => abortCont.abort();
            // Whenever the URL changes, we're going to re-render the page to fetch for new data
    }, [url]);

    // Returning an object, we end up with three values and we must return them
    return { data, isPending, error}
}

export default useFetch;