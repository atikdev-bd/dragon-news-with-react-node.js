import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const allNews = useLoaderData()
    console.log((allNews))
    return (
        <div>
            <h1>this is home components {allNews.length}</h1>
        </div>
    );
};

export default Home;