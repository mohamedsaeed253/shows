import React from "react";
import Card from "./Card/Card";
import { Outlet, useParams } from "react-router-dom";

export default function Movies({ moviesList }) {
  let id = useParams();
  return (
    <div>
      <div className="container mt-5 pt-1">
        {undefined === id.id ? (
          <div className="row g-3 my-2">
            {moviesList.map((Show, index) => {
              return <Card key={index} data={Show} />;
            })}
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}
