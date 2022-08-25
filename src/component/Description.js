import React from 'react'
import { Link, useParams } from 'react-router-dom'
import "./Description.css"
const Description = ({moviesListe}) => {
  const params= useParams()
  console.log(params)
  const movieDesc=moviesListe.find(el => el.id === params.id)
  return (
    <div  className='desc'>

   <Link to={'/'}>  <button className='home'> home </button> </Link> 

    <div className='movieDesc'>{movieDesc.description}</div>
    <div> {movieDesc.trailer} </div>
    </div>
  )
}
export default Description
