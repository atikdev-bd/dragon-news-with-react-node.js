import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCart from "../Shared/NewsSummaryCart/NewsSummaryCart";

const Home = () => {
  const allNews = useLoaderData();
  console.log(allNews);
  return (
    <div>
      <h1>this is home components {allNews.length}</h1>
      {allNews.map((news) => 
        <NewsSummaryCart key={news._id} news={news}></NewsSummaryCart>
      )}
    </div>
  );
};

export default Home;
