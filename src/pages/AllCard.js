import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/card';

const AllCard = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const nav = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php');
                if (response.status === 200) {
                    setData(response.data);
                    setIsLoading(false);
                }
            } catch (err) {
                console.log(err);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleClick = (item) => {
        navToDetail(item);
    };

    const navToDetail = (item) => {
        nav(`/detail/${item.id}`, { state: { itemData: item } });
    };

    return (
        <main>
            <h3 className="title">All Cards</h3>
            {isLoading ? (
                <p className='loading'>Loading...</p>
            ) : (
                <div className="card-container">
                    {data && data.data ? (
                        data.data.map((item, index) => (
                            <Card data={item} key={index} onClick={() => handleClick(item)} />
                        ))
                    ) : (
                        <p>No data found</p>
                    )}
                </div>
            )}
        </main>
    );
};

export default AllCard;
