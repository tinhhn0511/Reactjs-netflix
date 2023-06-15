import React, { useEffect, useState } from 'react'
import axios from './axios'
import requests from './Requests';
import './Row.css'

const baseUrl='https://image.tmdb.org/t/p/original/';
function Row({title,fetchUrl,isLargeRow}) {

    {console.log(isLargeRow)}
    const [movies,setMovies]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl])
    //`row_poster ${isLargeRow && 'row_posterLarge'}`
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
                {movies.map((movie,index)=>{
                        return(
                            <div key={index} >
                                
                                <img 
                                src={`${baseUrl}${(isLargeRow=='true')? movie.poster_path : movie.backdrop_path}`} alt={movie.name} 
                                className={`${(isLargeRow=='true')? 'row_posterLarge':'row_poster'}`}/>
                                
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Row
