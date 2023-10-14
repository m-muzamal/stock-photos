import React, { useEffect, useState } from "react";
import "./home.css";
import Images from "./images/Images";
import { createClient } from "pexels";
import SingleImage from "../singleimage/SingleImage";
import useData from "../../context/Data";

function Home() {
  const { data, setData } = useData();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const client = createClient(
    "g48P5isVWSqi2cPXLMB1QOH3gcgwNAXAwnOq00Ok1guM8Mjx1ZHOpfLP"
  );

  const handleClick = (image) => {
    setSelectedImage(image);
    console.log(selectedImage);
  };

  const renderImages = () => {
    if (Array.isArray(data.photos)) {
      return data.photos.map((image, id) => (
        <div key={id} className="img" onClick={() => handleClick(image)}>
          <Images
            img={image.src.large2x}
            alt={image.alt.slice(0, 50)}
            name={image.photographer}
            url={image.photographer_url}
          />
        </div>
      ));
    } else {
      return <div>No images found.</div>;
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleSearch = async () => {
    const photos = await client.photos.search({
      query: search || "nature",
      page,
    });
    setData(photos);
  };

  useEffect(() => {
    handleSearch();
  }, [setSearch, page]);
  
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="search-box">
            <h1 className="header-txt">
              The ultimate source for stunning, royalty-free visuals - where
              creativity meets freedom.
            </h1>
            <div className="search-content">
              <input
                className="search"
                type="text"
                placeholder="Search photos here..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="search-btn" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
        {!selectedImage ? (
          <div className="content">
            <h3 className="content-head">Free Stock Photos</h3>
            <div className="box">
              {renderImages()}
              <div className="buttons">
                <button className="next-page-btn" onClick={handlePrevPage}>
                  Prev Page
                </button>
                <button className="next-page-btn" onClick={handleNextPage}>
                  Next Page
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="popup-container">
            <button className="pop-btn" onClick={() => setSelectedImage(null)}>
              close
            </button>
            <SingleImage
              photographer={selectedImage.photographer}
              alt={selectedImage.alt}
              img={selectedImage.src.original}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
