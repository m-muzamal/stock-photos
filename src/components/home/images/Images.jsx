import "./images.css";
import { FaUserCircle } from "react-icons/fa";

function Images({ img, alt, name, url }) {
  return (
    <>
      <div className="imgs">
        <img src={img} alt="pic" />
        <p className="alt">{alt}</p>
        <div className="user">
          <span className="icon">
            <FaUserCircle />
          </span>
          <a className="name" href={url} target="_balnk">
            {name}
          </a>
        </div>
      </div>
    </>
  );
}

export default Images;
