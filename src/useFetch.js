import {useState} from "react"

export default function useFetch(baseUrl) {
    const [loading, setLoading] = useState(false);
    // console.log(loading);

    function get(url) {
        setLoading(true);
        // console.log(loading);
        return new Promise((resolve, reject) => {
            
            fetch(baseUrl + url)
            .then(response => {
                // console.log(response);
                if (response.ok) {
                    // console.log("success");
                    return response.json();
                }
                throw Error(response.status)
            })
            .then(data => {
                console.log(data);
                if (!data.error) {
                    resolve(data);
                    // console.log("success");
                } else {
                    reject(data);
                    // console.log("error");
                }
                setLoading(false);
            })
            .catch(error => {
                // console.log("catch");
                reject(error);
                setLoading(false);
            })
        })

    }

    return {get, loading};
};
