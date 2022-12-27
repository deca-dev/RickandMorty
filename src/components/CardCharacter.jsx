import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CardCharacter = resident => {

  const [character, setCharacter] = useState()

  useEffect(() => {
    axios.get(resident.resident)
      .then(res => setCharacter(res.data))
      .catch(err => console.log(err))
  }, [])

  


  return (

    <>
    <article className='relative box-content flex-col justify-center justify-items-center content-center text-xs max-w-[185px] sm:max-w-[300px]'>
      <img className='max-w-[100%]' src={character?.image} alt="" />
      <h2 className='text-left max-w-100%]'><span className='text-gray-500'>Name: </span><span className='text-white'>{character?.name}</span></h2>
      <p className='absolute top-8 text-left max-w-[100%] bg-gray-400 rounded-xl px-1 text-white align'><span >Status:<div className={`statusDot ${character?.status}`}></div></span>{character?.status}</p>
      <p className='text-left max-w-100%]'><span className='text-gray-500'>Origin: </span><span className='text-white'>{character?.origin.name}</span></p>
      <p className='text-left max-w-100%]'><span className='text-gray-500'>Episodes where appears: </span><span className='text-white'>{character?.episode.length}</span></p>
    </article >

   

    </>



  )
}

export default CardCharacter