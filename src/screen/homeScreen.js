import React from 'react'
import Navbar from '../Nav'
import Banner from '../Banner'
import Row from '../Row'
import './homeScreen.css'
import requests from '../Requests'
//requests.fetchTrending đường đẫn thôi.
function homeScreen() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Row title='Trending Now' fetchUrl={requests.fetchTrending} isLargeRow='true'/>
            <Row title='Top Rate' fetchUrl={requests.fetchTopRate}/>
            <Row title='Action Movie' fetchUrl={requests.fetchActionMovies}/>
            <Row title='Romance Movie' fetchUrl={requests.fetchRomanceMovies}/>
            <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
            <Row title='Honnor Movie' fetchUrl={requests.fetchHorrorMovies}/>

        </div>
    )
}

export default homeScreen
