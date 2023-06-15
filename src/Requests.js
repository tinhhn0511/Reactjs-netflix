const API_KEY= 'f81980ff410e46f422d64ddf3a56dddd'
//const API_KEY= 'd82885d4d369489f31a720345753a961'
// a,40,00
const requests={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOrigians:`/discover/tv?api_key=${API_KEY}&with_networks=233`,
    fetchTopRate:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`
}
export default requests
//https://www.themoviedb.org/3/movie/top_rated?api_key=d82885d4d369489f31a720345753a961&language=en-US