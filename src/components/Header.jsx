import React, { useEffect, useState } from 'react';
import { IMG_URL } from '../helper/apiRequests';
import Ratings from './Ratings';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeaderDetails, selectHeaderDetails } from '../features/common/commonSlice';
import Genres from './Genres';
import VideoPlayer from './VideoPlayer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

function Header(props) {
    const{video , platform}= props;
    const{data,status,error}=useSelector(selectHeaderDetails);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const[showVideo , setShowVideo] = useState(false);
    const handleVideo = () =>{
        setShowVideo(true);
    }

    useEffect(()=>{
        if(video){
            dispatch(fetchHeaderDetails({type:platform,id:video.id}))
        }

    },[video,dispatch])
    return (
        <div className='relative h-dvh '>
            {
                showVideo ? 
                <VideoPlayer videos={data?.videos.results}/>
                : 
            <>
            <img className="w-full h-full object-cover object-center block" src={`${IMG_URL + data?.backdrop_path}`} alt="" />
            <div className='text-white absolute left-20 z-10 top-1/2 -translate-y-1/2 max-w-md'>
                <div className='flex items-center'><img className='h-11 w-14' src="https://pngimg.com/d/netflix_PNG10.png" alt="" /><p className='text-xl tracking-widest font-body'>SERIES</p></div>
                <h1 className='text-6xl font-display mb-2'>{data?.name || data?.original_name || data?.title || data?.original_title}</h1>
                <h3 className='font-alternate text-yellow-500 text-3xl mb-2'>{data?.tagline}</h3>
                <p className='text-xl mb-2' >{data?.overview}</p>
                <Genres genres={data?.genres}/>
                <Ratings voteAverage={data?.vote_average} voteCount={data?.vote_count}/>
                <div flex gap-3>
                    <button className='px-5 py-2 mt-2 text-black bg-slate-200 mr-3 font-body font-extrabold' onClick={handleVideo}><FontAwesomeIcon icon={faPlay} className='mr-1' />Play</button>
                    <Link to={`details/${platform}/${data?.id}`} className='px-5 py-2 text-white bg-slate-500 font-body font-extrabold'><FontAwesomeIcon icon={faPlus} className='mr-1'/>More Info</Link>
                </div>
            </div>
            <div className='absolute bg-gradient-to-r from-stone-950 to-transparent h-full left-0 top-0 w-1/2'></div>
            </>
}
            
        </div>
    );
}

export default Header;
