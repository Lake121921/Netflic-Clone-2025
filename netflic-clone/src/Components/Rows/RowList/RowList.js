import React from 'react'
import Row from '../Row/Row';
import requests, { request } from '../../../utils/Requests';
function RowList() {
  return (
    <>
        <Row 
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOrginals}
          isLargeRow={true}
          //in here means RowList simply gives  the tittle && fetchURL
        />
         
         <Row 
          title="Trending Now" 
          fetchUrl={requests.fetchTrending} 
          isLargeRow={true}
        />
 
         <Row 
          title="Top Rate Movies"
          fetchUrl={requests.fetchTopRateMovies}
          //isLargeRow={true} //you can see the diffrenet on the browser
        />

        <Row 
          title="Action Movies" 
          fetchUrl={requests.fetchActionMovies}
          isLargeRow={true}
        />

        <Row 
          title="Comedy Movies" 
          fetchUrl={requests. fetchComedyMovies}
          isLargeRow={true}
        />

         <Row 
          title="Tv Show"
          fetchUrl={requests.fetchTvShow}
          isLargeRow={true}
          //in here means RowList simply gives  the tittle && fetchURL
        />
        
    </>
  )
}

export default RowList;