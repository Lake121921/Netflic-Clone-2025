import React from 'react'
import Row from '../Row/Row';
import requests, { request } from '../../../utils/Requests';
function RowList() {
  return (
    <>
        <Row 
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOr}
        />
        <Row />
        <Row />
        <Row />
    </>
  )
}

export default RowList;