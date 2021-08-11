import "./listitem.scss"

import React, { useState, useEffect } from 'react'
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons"
import axios from "axios";
import { Link } from "react-router-dom";

const ListItem = ({index, item}) => {
    const [isHovered, setIsHovered] = useState(false); 
    const [movie, setMovie] = useState({});

    useEffect(() => {
        const getMovie = async () => {
           try{
            const res = await axios.get("/movies/find/" + item, {
                headers: {
                  token:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTE0OWIyMzg5NGU1MTM3Yzk0OTNjNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyODY3MjIzMywiZXhwIjoxNjI5MTA0MjMzfQ.PZNhWbopZliYilh3-Kxbsc3IgxLn-V6H3Js9Bb_SQAM",
                },
              });
              setMovie(res.data);
              
           } catch(err){
               console.log(err)
           }
        };
        getMovie();      
    }, [item]);

    return (
        <Link to={{pathname:"/watch", movie:movie}}>
        <div className="listItem" 
        style={{left: isHovered && index * 225 - 50 + index *2.5}}
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}>
            <img src={movie.img} alt="" />

            {isHovered && (
            <>
            <video src={movie.trailer} autoPlay={true} loop></video>
                
            <div className="itemInfo">
                <div className="icons">
                   <PlayArrow className="icon"/> 
                   <Add className="icon"/>
                   <ThumbUpAltOutlined className="icon"/>
                   <ThumbDownAltOutlined className="icon"/>
                </div>
                <div className="itemInfoTop">
                    <span>{movie.duration}</span>
                    <span className="limit">{movie.limit}</span>
                    <span>{movie.year}</span>
                </div>
                <div className="desc">
                    {movie.title}
                </div>
                <div className="genre">{movie.genre}</div>
            </div>
        </>
        )}
        </div>
        </Link>
    )
}

export default ListItem

