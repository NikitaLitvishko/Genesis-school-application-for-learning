import { useState, useEffect } from "react";

const header = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
const body = 'eyJzdWIiOiJkOTRlNjg4NS1kM2U5LTQwY2EtYTVjYy01MDRkNjZlZDVlN2QiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3MDQ3NjIsImV4cCI6MTY3OTYwNDc2Mn0'
const signature = 'Qw3LF39CDp27ZxoGzt5rikJM_OTx0eNaoyFFLxxrXUM'
const API_TOKEN = [header, body, signature].join('.')

export default function useFetch (url) {
    const [data, setData] = useState(null);

    useEffect(() => { fetch(url, {
        method: 'GET', 
        headers: new Headers({
            'Authorization': `Bearer ${API_TOKEN}`,
        })})
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => setData(data))
    }, []);
    return data;
}