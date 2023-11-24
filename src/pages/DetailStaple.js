import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./detailpage.css";
const DetailStaple = () => {
    const [cardDetail, setCardDetail] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const fetchDetailData = async () => {
            const cardId = location.pathname.split('/').pop();
            try {
                const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${cardId}`);
                const data = await response.json();
                if (response.status === 200) {
                    setCardDetail(data.data[0]); // Assuming data is an array, adjust as per your API response
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDetailData();
    }, [location]);

    return (
        <div>
            {cardDetail ? (
                <div className='card-detail'>

                    <div className='card-wrapper'>

                        <h1>{cardDetail.name}</h1>

                        <img src={cardDetail.card_images[0].image_url} alt={cardDetail.name} />
                        <p>Type: {cardDetail.type}</p>
                        <p>Attack: {cardDetail.atk}</p>
                        <p>Defense: {cardDetail.def}</p>
                        <p>Description: {cardDetail.desc}</p>
                        <p>Level: {cardDetail.level}</p>
                        <p>Race: {cardDetail.race}</p>
                        <p>Attribute: {cardDetail.attribute}</p>
                        <p>Archetype: {cardDetail.archetype}</p>
                        <p>Linkval: {cardDetail.linkval}</p>
                        <p>Linkmarkers: {cardDetail.linkmarkers}</p>

                        {/* Display other relevant card details */}
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default DetailStaple;
