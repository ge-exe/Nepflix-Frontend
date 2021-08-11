import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./featured.scss";
import MeetrixLogo from "./meetrix.png";

const Featured = ({type}) => {

    const [content, setContent]= useState({})

    useEffect(() => {
        
        const getRandomContent = async () => {
            try{
                const res = await axios.get(`/movies/random?type=${type}`,
                {
                    headers: {
                      token:
                      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTE0OWIyMzg5NGU1MTM3Yzk0OTNjNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyODY3MjIzMywiZXhwIjoxNjI5MTA0MjMzfQ.PZNhWbopZliYilh3-Kxbsc3IgxLn-V6H3Js9Bb_SQAM",
                    },
                  })
                setContent(res.data[0]);
            }catch(err){
                console.log(err)
            }
        };
        getRandomContent();

    }, [type])

    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movies" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option >Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>

            )}
            <img src = {content.img} alt=""/>
        	<div className="info">
                <img src={MeetrixLogo} alt="" />
                <span className="desc">
                    {content.title}
                </span>
                <div className="buttons">
                    <button className="play">
                      <PlayArrow/>  
                      <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>

                </div>
            </div>





        </div>
    )
}

export default Featured
