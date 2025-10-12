// مثال React: عرض الـ IP باستخدام ipify
import React, { useEffect } from "react";
import axios from "axios";

export default function MyIp() {

    useEffect(() => {
        fetch("https://ipinfo.io/json")
            .then(res => res.json())
            .then(data =>
                axios.post("https://data-analysis-gqcx.onrender.com/api/data", data).catch((err) => console.log(err))
            )
            .catch(err => {
                console.error("Failed to get IP:", err);
            });
            axios.get("https://data-analysis-gqcx.onrender.com/api/data").then((res)=>{
                console.log(res.data);
            })
    }, []);

    return <div></div>;
}
