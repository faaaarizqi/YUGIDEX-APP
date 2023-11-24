import React from 'react';
import { useNavigate } from 'react-router-dom';
import './card.css';

const Card = ({ data, onClick }) => {
    const nav = useNavigate();

    const handleClick = () => {
        if (onClick) {
            onClick(data);
        } else {
            nav(`/detail/${data.id}`, { state: { itemData: data } });
        }
    };

    return (
        <div className="card" onClick={handleClick}>
            {data ? (
                <>
                    <h3>{data.name}</h3>
                    {/* Add other card information */}
                    <img src={data.card_images[0].image_url} alt={data.name} />
                </>
            ) : (
                <p className='loading'>Loading...</p>
            )}
        </div>
    );
};

export default Card;
