import { Link } from "react-router-dom";
import "./Card.css";

export default function Card(props) {
  let { data } = props;
  let link = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
  return (
    <div className="col-md-3 my-2 py-1">
      <div className="">
        <div className="show-img">
          <img src={link} alt={data.title || data.name} />
        </div>
        <Link to={data.id.toString()}>{data.name || data.title}</Link>
      </div>
    </div>
  );
}
