import React from 'react'
import { Link, useParams } from 'react-router-dom'
const Description = ({moviesListe}) => {
  const params= useParams()
  console.log(params)
  const movieDesc=moviesListe.find(el => el.id === params.id)
  return (
    <>
    <Link to={'/'}>  <button> home </button> </Link> 
    <div>{movieDesc.description}</div>
    <div> {movieDesc.trailer} </div>
    </>
  )
}

export default Description
