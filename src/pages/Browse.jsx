import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { platformType, requests } from '../helper/apiRequests';
import { fetchNetflixOriginals, selectNetflixOriginals } from '../features/tv/tvSlice';
import { fetchTopRatedMovies, selectTopRatedMovies } from '../features/movie/movieSlice';
import axios from '../helper/axios';
import { shuffle } from '../helper';
import Row from '../components/Row';

function Browse(props) {
    const dispatch = useDispatch();
    const {platform} = useParams();
    const{data,status,error} = useSelector(platform === "tv" ? selectNetflixOriginals : selectTopRatedMovies);

    const[genreList , setGenreList] = useState(null);

    const fetchGenreList = async(platform)=>{
        const response = await axios.get(requests.getGenresList(platform));
        setGenreList(shuffle(response.data.genres));
    }

    useEffect(() => {
        fetchGenreList(platform);
    },[platform])

    useEffect(() => { 
        if(platform === platformType.tv){
            dispatch(fetchNetflixOriginals());
        }else{
            dispatch(fetchTopRatedMovies());
        }

    },[platform])

    return (
        <>
        {
            status === "success" ?
        <Header video={data.results[Math.floor(Math.random() * data.results.length)]} platform={platform} />  : "Loading"
}  
<div className='px-4'>
    {
        genreList ? 
        genreList.map((genre,index)=>(
            index<6 ?
            <Row title={genre.name} key={genre.id} genre={genre} platform={platform}/> : " "
        )) : " "
    }
</div>
        </>
    );
}

export default Browse;