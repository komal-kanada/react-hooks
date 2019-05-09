import { useState, useEffect } from 'react';

export const useHttp = (url, dependencies) => {
    
    const [isLoading, setisLoading] = useState(false);
    const [fetchData, setfetchData] = useState(null);
    // fetch('https://swapi.co/api/people')
    useEffect(() => {
        setisLoading(true);
        console.log('sending HTTP request')

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch.');
                }
                return response.json();
            })
            .then(data => {

                setisLoading(false);
                setfetchData(data)
            })
            .catch(err => {
                console.log(err);
                setisLoading(true);
            });
    }, dependencies);

    return [isLoading, fetchData];
};
