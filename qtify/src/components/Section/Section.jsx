import React, { useState } from 'react'
import { CircularProgress } from '@mui/material';
import Card from "../Card/Card";
import styles from "./Section.module.css"
import Carousel from '../Carousel/Carousel';

// eg of data recieved is:
// type='album' title='Top Albums' data={topAlbumSongs}
// here, topAlbumSongs is just an array of 16-17 albums with some info and an array of songs in that album

const Section=({type,title,data,toggle=true})=> {

// if carouselToggle is true means render "collapsed" view (ie corousel of albums) and  on the button provide "show all" text
// if carouselToggle is false means render "show all" view (ie All albums ) and  on the button provide "Collapse all" text
    const[carouselToggle,setCarouselToggle]=useState(true);

    const handleToggle=()=>{
        setCarouselToggle(!carouselToggle);
    }

  return (
    <div>
     {/* small top div with Name of section and "show all/collepse all" button */}
        <div className={styles.sectionTop}>
            <h3>{title}</h3>
            <h4 onClick={handleToggle} className={styles.toggleText}>

            {/*  check if we want to show the show/collapse button or not */}
            {toggle?(
                 carouselToggle?"Show All":"Collapse All"
            ):(
                <></>
            )}
            </h4>
        </div>
        
        {data.length?(
            <div className={styles.sectionInnerWrapper}>
             {/* here, if carouselToggle is false then show first condition here(means "show all albums"), else show second (means show "Collpased view with corousel")*/}
            {!carouselToggle?(
                <div className={styles.showAllWrapper}>
                {data.map((album)=>(
                    //show card here
                    <Card data={album} type={type} key={album.id}/>
                ))}
                </div>
            ):(
              <div>
              {/* show carousel here */}
              <Carousel data={data} renderCardComponent={(data)=><Card data={data} type={type}/>}/>
              </div>  
            )}
            </div>
        ):(
            <div className={styles.progressBar}>
            {/* when no data recieved just show circular loading icon */}
            <CircularProgress />
            </div>
        )}

    </div>
  )
}

export default Section;
