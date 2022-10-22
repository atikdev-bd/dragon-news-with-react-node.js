import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCart from '../Shared/NewsSummaryCart/NewsSummaryCart';

const Category = () => {
    const news = useLoaderData()
    
    return (
        <div>
            
            {
                news.map(n => <NewsSummaryCart key={n._id} news={n}></NewsSummaryCart>)
            }
        </div>
    );
};

export default Category;