import { useEffect } from "react"

const useTitle = title =>{
    useEffect( ()=>{
        document.title = `${title} - Software Service Center`;
    },[title])
}

export default useTitle;