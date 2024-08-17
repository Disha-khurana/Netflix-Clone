import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAiringToday, fetchNetflixOriginals, fetchOnTheAir, selectAiringToday, selectNetflixOriginals, selectOnTheAir } from '../features/tv/tvSlice';
import Header from '../components/Header';
import Row from '../components/Row';
import { fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies, selectNowPlayingMovies, selectPopularMovies, selectTopRatedMovies, selectUpcomingMovies } from '../features/movie/movieSlice';
import { platformType } from '../helper/apiRequests';

function HomeScreen(props) {
    const dispatch = useDispatch();
    const {data,status,error} = useSelector(selectNetflixOriginals);

    useEffect(() => {
        dispatch(fetchNetflixOriginals());
        dispatch(fetchPopularMovies());
        dispatch(fetchNowPlayingMovies());
        dispatch(fetchTopRatedMovies());
        dispatch(fetchAiringToday());
        dispatch(fetchOnTheAir());
    },[dispatch])
    
    return (
        <>
        {
            status === "success"? <Header video={data.results[Math.floor(Math.random() * data.results.length)]} platform={platformType.tv}/> :"Loading"        
        }
        <div className='px-4'>
        <Row title="Coming This Week" action={fetchUpcomingMovies} selector={selectUpcomingMovies} platform={platformType.movie}/>
        <Row title="Continue Watching" action={fetchNowPlayingMovies} selector={selectNowPlayingMovies} platform={platformType.movie}/>
        <Row title="Popular on Netflix" action={fetchPopularMovies} selector={selectPopularMovies} platform={platformType.movie}/>
        <Row title="Trending Now" action={fetchTopRatedMovies} selector={selectTopRatedMovies} platform={platformType.movie}/>
        <Row title="Airing Today" action={fetchAiringToday} selector={selectAiringToday} platform={platformType.tv}/>
        <Row title="On The Air" action={fetchOnTheAir} selector={selectOnTheAir} platform={platformType.tv}/>
        </div>
           
        </>
    );
}

export default HomeScreen;