import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideoDetails, selectVideoDetails } from '../features/common/commonSlice';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import { IMG_URL } from '../helper/apiRequests';
import Ratings from '../components/Ratings';
import Genres from '../components/Genres';
import Card from '../components/Card';

function Details(props) {
    const{data , status , error} = useSelector(selectVideoDetails);
    const {platform , id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if(platform && id){
        dispatch(fetchVideoDetails({type:platform , id:id}))
        }
    },[platform , id])
    return (
        <div className='py-28 bg-primary-600 text-white'>
            <div className='max-w-7xl mx-auto'>
                <VideoPlayer videos={data?.videos.results}/>
            </div>
            <div className='px-4 flex mt-6'>
                <div className='px-4 w-1/4'>
                    <img src={IMG_URL + data?.poster_path} alt="" />
                </div>
                <div className='px-4 w-3/4'>
                    <div className='py-3'>
                        <h2 className='font-display text-4xl mb-4'>{data?.title || data?.name || data?.original_title || data?.original_name}</h2>
                        {data?.tagline ?
                        <h3 className='font-alternate text-yellow-500 text-3xl mb-2'>{data.tagline}</h3> : ""
                        }
                        <div className='mt-4'>
                            <Ratings voteCount={data?.vote_count} voteAverage={data?.vote_average}/>
                            <hr className='my-4'/>
                            <Genres genres={data?.genres}/>
                        </div>
                        <div className='py-4'>
                            <h1 className='mb-3 font-bold text-xl'>Similar {platform === "tv" ? "TV Shows" : "Movies"}</h1>
                            <div className='flex flex-wrap'>
                                {
                                    data?.similar.results.map((video,index)=>(
                                        index < 6 ?
                                        <div className='w-1/3'>
                                            <Card video={video} platform={platform}/>
                                        </div> : ""
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Details;