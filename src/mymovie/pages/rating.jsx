import { useState } from "react";
import MainPage from "../../components/MainPage";
import "./rating.css"
import { Button, TextField } from '@mui/material'
const Rating = () =>{
    let title,img,rating,trailer;
const [isOpen,setIsOpen]=useState(false)
  const [MovieesList,setMovieList] = useState([
    {
        
        img:"https://bit.ly/3wD6xXv",
        title:"Rio",
        rating:3,
        trailer:"https://www.youtube.com/embed/mwbYoGxEe9g",
    },
    {
        
        img:"https://bit.ly/3PX63Cz",
        title:"Harry potter",
        rating:0,
        trailer:"https://www.youtube.com/embed/Cj6FmLV1XaQ",
    }
])
   
   const addNewMovieArray=(movie)=>{
    const NewMovieArray= [...MovieesList]
    NewMovieArray.push(movie)
    setMovieList(NewMovieArray)
   }
   
   
    
  return(
      //html
      <div >
        <div className="addNewMbtm">
        <Button variant="contained" disableElevation onClick={()=> setIsOpen(!isOpen)} className="button-51">Add new movie</Button>
       
        </div>
        { isOpen?(

            <div className="NewMovieSection">
            <TextField id="outlined-basic" label="Title" variant="outlined" className="newS" onChange={(e)=> title=e.target.value}/>
            <TextField id="outlined-basic" label="Image" variant="outlined" className="newS" onChange={(e)=> img=e.target.value}/>
            <TextField id="outlined-basic" label="Rating" variant="outlined" className="newS" onChange={(e)=> rating=e.target.value}/>
            <TextField id="outlined-basic" label="Trailer" variant="outlined" className="newS" onChange={(e)=> trailer=e.target.value}/>
             
            
                <Button variant="contained" color="success"
                onClick={() =>{
                
                    addNewMovieArray({img:img,
                        title:title,
                        rating:rating,
                        trailer:trailer,})
                        setIsOpen(!isOpen)
                
                }} className="button-62">Save</Button>
            </div>
            ):
            (
                <div></div>
            )

        }
        {MovieesList.map((movie,index) =>{
        return <div key={index}>
            <MainPage
            img={movie.img}
            title={movie.title}
            rating={movie.rating}
            trailer={movie.trailer}
            index={index}
            MovieesList={MovieesList}
            setMovieList={setMovieList}
            ></MainPage>
            
         </div>
        })}
      
      </div>
  )
  }
  
  export default Rating;    