import "../mymovie/pages/rating.css"
import { useState } from "react";
import {Rating} from '@mui/material'

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const MainPage = (props)=>{
    const [isOpen,setIsOpen]=useState(false)
    const[counter,setCounter]=useState(props.rating)
    
    const removeMovie = () => {
        props.MovieesList.splice(props.index, 1)
        props.setMovieList([...props.MovieesList])
        console.log(props.MovieesList);
        
      };
      
    
    
    
    return(
        <div>

        <div className="movieContiner" >
            
            <div className="movieSection">
            <img alt="movie img" src={props.img} className="movieimg" onClick={()=> setIsOpen(!isOpen)}></img>
            </div>
            <div className="movieSection nameMovie">
            <h4 >{props.title}</h4>
            </div>
            
            <div className="movieSection rating">
            <Rating name="size-medium" defaultValue={counter} onChange={((event, newValue)=> setCounter(newValue))} />

            </div>
            <div className="movieSection">
            
            <DeleteForeverIcon onClick={()=> {removeMovie()}} className="remove"></DeleteForeverIcon>
            </div>
            { isOpen?(
                
                <div>
           
                <iframe width="250" height="250" src={props.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            ):
            (
                <div></div>
            )

        }

            </div>
        
            
        </div>  
    )
    
    } 


export default MainPage

