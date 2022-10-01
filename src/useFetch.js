import {useState} from "react"

export default function useFetch(baseUrl) {
    const [loading, setLoading] = useState(true);

    function get(url) {
        return new Promise((resolve, reject) => {
            fetch(baseUrl + url)
            .then(response => response.json())
            .then(data => {
                setLoading(false);
                if (data.error) {
                    reject(data.error);
                } else {
                    // console.log(data);
                    resolve(data);
                }
            })
            .catch(error => {
                setLoading(false);
                reject(error);
            })
        })
    }

    return {get, loading};
};
