import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { DataContextDispatchProvider } from '../../contexts/DataContext';
import SideBar from '../sidebar/SideBar';

function InfoBar() {
  const [singelChar, setSingleChar] = useState()
  const { name } = useParams()
  
  const { single } = useParams()
  const { dispatch } = useContext(DataContextDispatchProvider)

  const getData = async () => {
    try {
      const fetch1 = await fetch(`http://localhost:3000/characters?name=${name}`);
      const response = await fetch1.json();

      setSingleChar(response[0])
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getData()
  }, [name])

  return (
    <>
      {singelChar && <div className='hidden w-2/3 h-fit p-5 bg-gray-600 rounded-lg shadow-xl ---- lg:block'>
        <div className='w-full flex items-center bg-gray-700 rounded-lg p-4 mb-5'>
          <img src={singelChar.image} alt={singelChar.name} draggable='false' className='w-1/4 aspect-auto rounded-lg' />
          <div className='flex w-3/4 flex-col justify-center items-center p-3'>
            <div className='text-6xl font-bold text-center text-white'>{singelChar.name}</div>
          </div>
        </div>

        <div className='flex flex-col w-full text-white bg-gray-800 rounded-lg p-5'>

          <div className='flex justify-between gap-4 mb-5'>
            <div className='flex flex-col items-center bg-gray-700 p-3 rounded-lg w-[48%]'>
              <div className='text-xl font-semibold'>{singelChar.status === 'Dead' ? '🔴 Dead' : '🟢 Alive'}</div>
              <div className='text-sm text-gray-300'>{singelChar.species}</div>
            </div>
            <div className='flex flex-col items-center bg-gray-700 p-3 rounded-lg w-[48%]'>
              <div className='text-xl font-semibold'>{singelChar.gender}</div>
              <div className='text-sm text-gray-300'>🌍 {singelChar.origin.name}</div>
            </div>
          </div>

          <div className='flex justify-center'>
            <button
              className='border border-white border-solid px-6 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors duration-300'
              onClick={() => dispatch({ type: 'addToFave', payload: singelChar.id })}
            >
              Add To Favorites
            </button>
          </div>
        </div>
      </div>}

    </>
  )
}

export default InfoBar;