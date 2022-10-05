import {useState} from "react"

export default function useFetch(baseUrl) {
    const [loading, setLoading] = useState(true);

    function get(url) {
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
                setLoading(false);
                if (!data.error) {
                    resolve(data);
                    // console.log("success");
                } else {
                    reject(data);
                    // console.log("error");
                }
            })
            .catch(error => {
                setLoading(false);
                // console.log("catch");
                reject(error);
            })
        })
    }

    return {get, loading};
};
