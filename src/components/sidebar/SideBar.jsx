import React, { useContext, useEffect } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router';
import { DataContext, DataContextDispatchProvider } from '../../contexts/DataContext';

function SideBar() {
    const { redState, allData } = useContext(DataContext)
    const { dispatch } = useContext(DataContextDispatchProvider)
    const { s } = useParams()
    let status = s || 'all'
    const navigator = useNavigate();
    const l = window.location.search

    const [searchParams, setSearchParams] = useSearchParams()
    const searchP = searchParams.get('s') || 'all'

    // useEffect(() => {
    //     dispatch({ type: status });
    // }, [status, allData]);


    useEffect(() => {
        dispatch({ type: searchP });
    }, [searchP, allData]);

    return (
        <>
            <div className='p-4 pt-0 overflow-auto w-full ---- lg:w-1/2 xl:w-1/3'>
                {
                    redState.map((item) => {
                        return (
                            <div key={item.id} className='flex w-full text-xs bg-gray-800 text-white mb-5 rounded-lg overflow-hidden ---- md:text-sm'>
                                <img src={item.image} draggable='false' alt="" className='w-1/5 aspect-auto ' />
                                <div className='flex flex-col gap-2 w-3/5 justify-center items-center ---- lg:flex-row'>
                                    <div className='text-center'>{item.name}</div>
                                    <span className={`inline-flex items-center px-2 py-1 rounded-full ${item.status === 'Dead' ? 'bg-red-600' : 'bg-green-600'}`}>
                                        {item.status === 'Dead' ? '🔴 Dead' : '🟢 Alive'} - {item.species}
                                    </span>
                                </div>
                                {/* before lg */}
                                <button onClick={() => navigator(`/singlechar/${item.name}`, { state: l })} className='w-1/5 flex justify-center items-center ms-auto aspect-auto cursor-pointer ---- lg:hidden'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="icon icon-tabler icons-tabler-outline icon-tabler-eye w-20">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                        <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                                    </svg>
                                </button>
                                {/* next lg */}
                                <Link to={`/${item.name}/?s=${searchP}`} className='w-1/5 hidden justify-center items-center ms-auto aspect-auto cursor-pointer ---- lg:flex'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="icon icon-tabler icons-tabler-outline icon-tabler-eye w-20">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                                        <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                                    </svg>
                                </Link>
                            </div>

                        )
                    })
                }

            </div>

        </>
    )
}

export default SideBar