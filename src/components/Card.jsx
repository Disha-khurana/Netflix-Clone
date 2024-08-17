import React from 'react';
import { IMG_URL } from '../helper/apiRequests';
import Ratings from './Ratings';
import { useNavigate } from 'react-router-dom';

function Card(props) {
    const {video , platform} = props;
    const navigate = useNavigate();
    const handleDetails = () =>{
        navigate(`/details/${platform}/${video.id}`);
    }

    return (
        <div className='rounded-sm overflow-hidden relative cursor-pointer group' onClick={handleDetails}>
            <img className="w-full block " src={`${video?.backdrop_path ? IMG_URL + video?.backdrop_path : ""}`} alt="" />
            <div><img className='absolute top-0 h-9 p-0' src="https://pngimg.com/d/netflix_PNG10.png" alt="" /></div>
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-slate-900 to-transparent text-white'>
                <div className='h-24 p-3 absolute left-0 bg-gradient-to-t from-slate-900 to-transparent -bottom-10 w-full group-hover:bottom-0 transition-all duration-300'>
                <h5 className='w-5/6 font-display text-xl truncate mb-4'>
                {video?.name || video?.original_name || video?.title || video?.original_title}

                </h5>
                <Ratings voteAverage={video?.vote_average} voteCount={video?.vote_count}/>
                </div>

            </div>
        </div>
    );
}

export default Card;