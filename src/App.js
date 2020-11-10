import React from 'react'
import './App.css'
import requests from './requests';
import Row from './Row';
import Banner from './Banner'
import Nav from './Nav'

function App(){
  return(
    <div className="app">
     <Nav />
    <Banner />
    
    <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
    <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title="Trending Now" fetchUrl={requests.fetchTrending}  />
    <Row title="Top Rated!" fetchUrl={requests.fetchTopRated}  />
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}  />
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}  />
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}  />
    <Row title="Top Documentary" fetchUrl={requests.fetchDocumentaries}  />
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}  />
   
   
     
  </div>

  )
  
}
export default App;