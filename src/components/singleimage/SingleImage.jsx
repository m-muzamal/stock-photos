import React from "react";
import "./singleimage.css";
// import prod from "../../assets/2.jpg";
import { FaUserCircle } from "react-icons/fa";

function SingleImage({photographer, alt, img}) {
  return (
    <div className="image-container">
      <div className="data">
        <div className="items">
          <div className="detail">
            <div className="photographer">
              <span className="profile">
                <FaUserCircle />
              </span>
              <p className="photographer-name">{photographer}</p>
            </div>
            <p className="photo-alt">{alt}</p>
          </div>
          <div className="image-data">
            <img src={img} alt="image" />
          </div>
          <div className="about">
            <p>Like</p>
            <p>View</p>
            <p>Download</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleImage;
