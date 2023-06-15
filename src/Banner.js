
import React, { useEffect, useState } from 'react'
import requests from './Requests';
import axios from './axios';
import './Banner.css'
function Banner() {
    const [movie,setMovie]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request= await axios.get(requests.fetchActionMovies)
            setMovie(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length-1)
                ]
            )
            return request;
        }
        fetchData();
    },[])
  //  console.log(movie);


    const truncate=(string)=>{
        return (string.length >150)? string.substr(0,150) + '....':string;
    }
    return (
        <header className='banner'
            style={{
                backgroundSize:'cover',
                backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
                backgroundPosition:'center center'
            }}>

           <div className='banner_content'>
                <h2 className='banner_title'>
                   {movie?.original_title||movie?.original_name || movie?.name}
                </h2>
                <div className='banner_btns'>
                    <button className='banner_btn'>Play</button>
                    <button className='banner_btn'>My List</button>

                </div>
                <h1 className='banner_description'>
                    {truncate(`${movie?.overview}`)}
                    </h1>
           </div>
           <div className='banner-fadeBottom' />
        </header>
    )
}

export default Banner
