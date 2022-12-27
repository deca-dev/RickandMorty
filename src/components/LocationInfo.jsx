import React from 'react'

const LocationInfo = ({ locationInfo }) => {
const info = locationInfo
  return (
    <>
      <article className='w-[95%] max-w-[900px] mx-auto'>
        <ul className='flex justify-around my-5  text-center text-xs bg-slate-800 text-white rounded-md h-12'>
          <li className='my-auto'><span className='block font-bold'>Name: </span><span>{locationInfo?.name}</span></li>
          <li className='my-auto'><span className='block font-bold'>Type: </span><span>{locationInfo?.type}</span></li>
          <li className='my-auto'><span className='block font-bold'>Dimension: </span><span>{locationInfo?.dimension}</span></li>
          <li className='my-auto'><span className='block font-bold'>Population: </span><span>{locationInfo?.residents.length}</span></li>
        </ul>
      </article>
    </>
  )
}

export default LocationInfo