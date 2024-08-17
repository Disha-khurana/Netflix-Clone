import React from 'react';
import { Link } from 'react-router-dom';

function Genres(props) {
    const{genres}=props;
    return (
        <div className='flex gap-2 mb-4'>
            {
                genres?.map((genre)=>(
                    <Link to='/' key={genre?.id} className='rounded-full px-2 py-1 bg-yellow-500 text-black'>
                        {genre?.name}

                    </Link>

                ))
            }
            
        </div>
    );
}

export default Genres;