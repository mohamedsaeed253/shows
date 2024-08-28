import { Outlet, useParams } from "react-router-dom";
import Card from "./Card/Card";

export default function Shows({ showsList }) {
  let id = useParams();
  console.log(showsList);
  return (
    <div>
      <div className="panner d-flex flex-column">
        <h1>The Leatest Trending</h1>
        <h2>Movies & Series</h2>
      </div>
      <div className="container my-5">
        {undefined === id.id ? (
          <div className="row g-3 my-2">
            {showsList.map((Show, index) => {
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
