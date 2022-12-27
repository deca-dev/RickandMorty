import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import CardCharacter from './CardCharacter'
import Footer from './Footer'
import LoadingScreen from './LoadingScreen'
import LocationInfo from './LocationInfo'

const InputBar = ({ locationName }) => {

    const [locationSelected, setLocationSelected] = useState()
    const [locationInfo, setLocationInfo] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const locationOptions = locationName?.map(location => location.name)

    const handleSelectChange = ({ value }) => {
        setLocationSelected(value)
    }



    useEffect(() => {

        const URL2 = `https://rickandmortyapi.com/api/location?name=${locationSelected}`
        axios.get(URL2)
            .then(res => {
                setLocationInfo(res.data.results[0])
                setIsLoading(false)
            })
            .catch(err => console.log(err))

    }, [locationSelected])

    return (
        <>
        <div className='flex-col justify-items-center justify-center w-[100%] max-w-[1200px] my-5 mx-auto px-5 min-h-[50vh]'>
            <Select
                options={locationOptions?.map(sup => ({ label: sup, value: sup }))}
                onChange={handleSelectChange} 
                className="max-w-[1200px] text-xs md:text-sm mx-auto"
                />

            {
                isLoading ? <LoadingScreen />
                    :
                    <>
                        <LocationInfo locationInfo={locationInfo} />
                        <div className='flex justify-center flex-wrap gap-5 max-w-[1200px]'>
                        {locationInfo?.residents.map(resident => (
                            <CardCharacter resident={resident} key={resident} />
                        ))}

                        
                        </div>
                    </>

            }
        </div>
    <Footer/>
        </>


    )
}

export default InputBar