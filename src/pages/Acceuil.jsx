import React from 'react';
import films from '../data/Films'
import { useNavigate } from 'react-router-dom';
import './Acceuil.css'
import { useEffect } from 'react';
import { useState } from 'react';

const Acceuil = () => {
    const [popup,setPopup] = useState(false)
    const [secondPop, setSecondPop] = useState( false)
    const [email,setEmail] = useState("")
    // const [dont,setDont] = useState(true)
    const [fin ,setFin] = useState(localStorage.getItem("fin")|| false)

    // const [sol,setSol] = useState(false)
    const navigate = useNavigate()

    const GoToDetail = (id) => {
        navigate('/detail', { state: id });
    }


    
    useEffect(() =>{



    
        setTimeout(() => {
            if(fin == false){
                setPopup(true)
            }

        },5000)
       
    },[])

   
    
    const changeThePop = () => {
        setSecondPop(true)
        setPopup(false)
    }

    const hideThePop = () => {
        setPopup(false)
        setSecondPop(false)
        // setSol(true)
        setFin(true)
        
        
        localStorage.setItem("fin", true)
    }

    const hideThePopAgain = () => {
          
          setSecondPop(false)
        //   setSol(true)
          setFin(true)
          localStorage.setItem("fin", true)
    }
    return (
        <>
         {popup && <div className='popup-div'> 
                        <h4>Do you Want to Enter your email and subscribe ?</h4>
                        <div className='flex-btn'>
                              <button onClick={() => changeThePop()}>yes</button>
                              <button onClick={() => hideThePop()}>No</button>
                        </div>
                        
                  </div>}
        {secondPop && 
                <div id='second' className='popup-div'> 
                        <label htmlFor="">Enter your email</label>
                        <input type="email" placeholder='enter you email' />
                        <button id='sub-btn'  onClick={() => hideThePopAgain()}>Subscribe</button>
                        
                  </div>
         }
        <div className='acc'>
            <h1 className='title'>The Films of The Moments</h1>

            <div className='film-grid'>
                {films.map((index) => {
                    return (
                        <div className='film-col' key={index.id} onClick={() => GoToDetail(index.id)}>
                            <img src={index.url} alt="" />
                            <h3>{index.title}</h3>
                        </div>
                    )
                })}
            </div>

        </div>
        </>
    );
}

export default Acceuil;
