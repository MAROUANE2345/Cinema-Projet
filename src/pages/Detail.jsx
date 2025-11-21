import React, { useState } from 'react';
import './Detail.css'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import films from '../data/Films'
import { useNavigate } from 'react-router-dom';
const Detail = () => {
   const location = useLocation()
   const id = location.state
   const [film,setFilm] = useState({})

   const navigate = useNavigate()

   const GoBack = () => {
    navigate('/')
   }
  useEffect(() => {
    films.map((index) => {
        if(index.id == id){
           setFilm(index)
        }
    })
}, []);

    return (
        <div className='detail-col'>
           
            <div className='main-div'>
                 <div className='film-info-col'>
                     <h3>Title : {film.title}</h3> 
                     <h3>Description : {film.description}</h3> 
                      <h3>Year : {film.year}</h3>
                      <h3>Actor : {film.actors && film.actors.join(", ")} </h3>
                 </div>

                 <img src={film.url} alt="" />
            </div>

            <button onClick={() => GoBack()}  className='return-home'>Return to acceuil</button>
        </div>
    );
}

export default Detail;
