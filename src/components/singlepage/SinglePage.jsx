import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router'
import { DataContextDispatchProvider } from '../../contexts/DataContext'
import Footer from '../../footer/Footer'

function SinglePage() {
    const [singelChar, setSingleChar] = useState()
    const { single } = useParams()
    const { dispatch } = useContext(DataContextDispatchProvider)
    const l = useLocation().state
    console.log(l);


    const getData = async () => {
        try {
            const fetch1 = await fetch(`http://localhost:3000/characters?name=${single}`);
            const response = await fetch1.json();

            setSingleChar(response[0])
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        getData()
    }, [single])

    return (
        <>

            <div className='mb-1 relative p-3'>
                <Link to={`/${l}`} className='inline-flex p-5 rounded-full bg-gray-800 text-white font-semibold text-xl absolute'>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" />
                        <path d="M5 12l4 4" />
                        <path d="M5 12l4 -4" />
                    </svg>
                </Link>
                {singelChar && <div className='w-[90%] mx-auto my-auto h-fit p-5 bg-gray-600 rounded-lg shadow-xl ----'>
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
            </div>
            <Footer />
        </>
    )
}

export default SinglePage