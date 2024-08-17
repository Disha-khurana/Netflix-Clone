import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import { requests } from '../helper/apiRequests';
import axios from '../helper/axios';

function Row(props) {
    const{title,action,selector, platform , genre} = props;
    const{data,status,error} = useSelector(genre ? (state)=> state.tv.netflixOriginals : selector);
    const dispatch = useDispatch();
    const[videoByGenre , setVideoByGenre] = useState(null);

    const fetchVideosByGenre = async(platform,id)=>{
        const response = await axios.get(requests.getDataByGenre(platform , id))
        setVideoByGenre(response.data.results);
    }

    useEffect(()=>{
        if(genre){
            fetchVideosByGenre(platform,genre.id)
        }else{
        dispatch(action());
        }
    },[action,dispatch])

        return (
        <div className='py-4 text-white '>
            <h3 className='mb-3 font-bold text-xl'>{title}</h3>
            <Swiper
                spaceBetween={15}
                slidesPerView={5}
            >{
                genre ? 
                <>
                {
                videoByGenre ? 
                videoByGenre.map((video) => (
                    <SwiperSlide key={video.id}>
                        <Card video={video} platform={platform}/>
                    </SwiperSlide>
                )) : ""
            }

                </>
                 :
                <>
                {
                data ? 
                data.results.map((video) => (
                    <SwiperSlide key={video.id}>
                        <Card video={video} platform={platform}/>
                    </SwiperSlide>
                )) : ""
            }
                </>
}
            </Swiper>
            
        </div>
    );
}

export default Row;