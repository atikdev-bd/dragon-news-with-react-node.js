import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categores, setCategores] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/news-category")
      .then((res) => res.json())
      .then((data) => {
       
        setCategores(data);
      });
  }, []);
  return (
    <div>
      <h4 className="bg-info">all category : {categores?.length}</h4>

      <div>
        {categores?.map((category) => (
          <p key={category.id}>
            <Link to={`/category/${category?.id}`}>{category?.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
