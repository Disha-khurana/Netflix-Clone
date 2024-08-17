import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { searchQuery } from '../features/common/commonSlice';

function Navbar(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSearch = (e) =>{
        let {value}=e.target;
        if(value.length > 3){
        dispatch(searchQuery({platform:"movie" , query:value}))
        navigate('/search')
        }
    }

    return (
        <nav className='bg-gradient-to-b from-slate-800 to-transparent text-white sticky top-0 w-full z-50 transition-colors duration-300 bg-black'>
            <div className='px-4 flex items-center gap-4 min-w-'>
                <div className='py-2'>
                    <Link to="/" className='text-2xl font-bold'><img className='h-11 m-2' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" /></Link>
                </div>
                {/* menu */}
                <div className='flex items-center'>
                    <Link className='font-semibold text-white no-underline py-4 px-3 hover:bg-transparent transition' to="/">Home</Link>
                    <Link className='font-semibold text-white no-underline py-4 px-3 hover:bg-transparent transition' to="/browse/tv">Tv Shows</Link>
                    <Link className='font-semibold text-white no-underline py-4 px-3 hover:bg-transparent transition' to="/browse/movie">Movies</Link>
                    <Link className='font-semibold text-white no-underline py-4 px-3 hover:bg-transparent transition' to="/browsebygenre/tv/10762">Browse By Genre</Link>
                </div>
                <div className='right-0 ml-auto mr-6 text-xl'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} /><input type='text' className='p-0 border-gray-300 text-black rounded-sm ml-3' placeholder=' search' onChange={handleSearch}/>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;