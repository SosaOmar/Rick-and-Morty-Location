import axios from "axios"
import { useEffect, useState } from "react"

const useApi = (url) => {
    const [api, setApi] = useState()
    useEffect(() => {
        axios.get(url)
        .then(res => setApi(res.data))
        .catch(err =>console.log(err + "este es el error"))
    }, [])
    
    return api
}

export default useApi