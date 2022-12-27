import axios from "axios"
import { useEffect, useState } from "react"

const useLocationApi = () => {

    const [locationName, setLocationName] = useState()
    

    const getArr = () => {
        let arrLength = []
        for (let i = 1; i <= 126; i++) {
            arrLength.push(i)
        }
        return arrLength
    }

    useEffect(() => {

        URL = `https://rickandmortyapi.com/api/location/${getArr()}`
        axios.get(URL)
            .then(res => setLocationName(res.data))
            .catch(err => console.log(err))
    }, [])

    
    return { locationName}
}

export default useLocationApi