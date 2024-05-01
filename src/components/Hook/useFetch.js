import { useEffect,useState } from "react";
import axios  from "../../api";

export function useFetch(api,...rest){
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [arr, setArr] = useState(null)
    

    useEffect(() =>{
        setLoading(true)
axios
.get(api)
.then(ris => setData(ris))
.catch(arr => setArr(arr)) 
.finally(() => setLoading(false))
    },[...rest])
    return {data,loading,arr}
}