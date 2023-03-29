import React from "react";
import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";
import p4 from "../../assets/p4.jpg";
import p5 from "../../assets/p5.jpg";
import p6 from "../../assets/p6.jpg";
import GalleryPic from "../GalleryPic/GalleryPic";
import "./Gallery.css";
function Gallery() {
  const pics = [p1, p2, p3, p4, p5, p6];
  function fun(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const data = [
    { id: 1, likes: fun(10, 1000), comments: fun(10, 1000) },
    { id: 2, likes: fun(10, 1000), comments: fun(10, 1000) },
    { id: 3, likes: fun(10, 1000), comments: fun(10, 1000) },
    { id: 4, likes: fun(10, 1000), comments: fun(10, 1000) },
    { id: 5, likes: fun(10, 1000), comments: fun(10, 1000) },
    { id: 6, likes: fun(10, 1000), comments: fun(10, 1000) },
  ];
  return (
    <div className="gallery-main-info">
      <div className="gallery-info">
        {data.map(function (item, index) {
          return (
            <GalleryPic
              key={index}
              img={pics[item.id - 1]}
              likes={item.likes}
              comments={item.comments}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
