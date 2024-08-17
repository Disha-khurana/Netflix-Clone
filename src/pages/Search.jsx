import { useSelector } from 'react-redux';
import { requests } from '../helper/apiRequests';
import axios from '../helper/axios';
import React, { useEffect, useState } from 'react';
import { selectSearchParams } from '../features/common/commonSlice';
import Card from '../components/Card';

function Search(props) {
    const[videoBySearch , setVideoBySearch] = useState();
    const{platform,query} = useSelector(selectSearchParams);
    const fetchBySearch = async (platform,query) =>{
        const response = await axios.get(requests.getBySearch(platform,query))
        setVideoBySearch(response.data);
        
    }

    useEffect(()=>{ 
        if(platform,query){
        fetchBySearch(platform,query);
        }
    },[platform,query])

    return (
        <div className='py-28 px-4'>
            <div className='flex gap-4 flex-wrap'>
                    {
                        videoBySearch?.results.map((video)=>(
                    <div key={video?.id} className='w-1/5'>
                    <Card video={video} platform={platform}/>

                    </div>
                        ))
                    }

                </div>           
        </div>
    );
}

export default Search;