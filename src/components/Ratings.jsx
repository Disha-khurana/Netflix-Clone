import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Ratings(props) {
    const{voteAverage , voteCount}=props;
    let vote = Math.floor(voteAverage/2);
    const stars = [...Array(5)];

    return (
        <div className='flex'>
            <div className='me-2'>
            {
            stars.map((item,index) => (
                index < vote ?
                <FontAwesomeIcon key={index} icon={solidStar} /> :
                <FontAwesomeIcon key={index} icon={faStar} />
            ))
            }
            </div>
            <p>({voteCount})</p>
            
        </div>
    );
}

export default Ratings;