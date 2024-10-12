import { useEffect } from "react";

export default function Articles() {

    useEffect(()=>{
        const fetchList = async()=>{
            const res = await fetch('/api/articlesList');
            const data = await res.json();
            console.log("data",data);
        }   
        fetchList();
    },[])
    return (
        <div>
            <h1>Blogs</h1>
        </div>
    );
}