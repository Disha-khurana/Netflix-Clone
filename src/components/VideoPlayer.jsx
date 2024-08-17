import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { IMG_URL } from '../helper/apiRequests';
import { useSelector } from 'react-redux';
import { selectHeaderDetails } from '../features/common/commonSlice';
import { useNavigate } from 'react-router-dom';

function VideoPlayer(props) {
    const{videos,video}=props;
    const{data,status,error} =useSelector(selectHeaderDetails);
    const[trailer,setTrailer] =useState(null);
    const navigate = useNavigate();

    useEffect(()=>{ 
        if(videos){
            let filteredVideo = videos.find((item)=>item.type === "Trailer");
            setTrailer(filteredVideo);
        }
    },[videos])

    const handleCancel = () =>{
        setTrailer(null);
        navigate('/');
    }

    return (
        <div>
        { trailer ? (
        <div className='relative w-full h-full group'>                            
            <iframe className='w-full h-dvh' src={`https://www.youtube.com/embed/${trailer?.key}?mute=1&autoplay=1`} title="Youtube Video Player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <button onClick={handleCancel}><FontAwesomeIcon icon={faXmark} className='absolute top-0 right-0 cursor-pointer h-5 bg-slate-950 p-1 hidden group-hover:block group-hover:bg-red-700'/></button>
        </div>
        ) : (
            <img src={`${IMG_URL + video?.backdrop_path}`}  alt="" />
        )
        //browser dont supp autoplay
        }
        </div>
    );
}

export default VideoPlayer;