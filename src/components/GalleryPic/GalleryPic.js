import React, { useState } from "react";
import "./GalleryPic.css";
import ModalContent from "../ModalContent/ModalContent";
function GalleryPic(props) {
  const [hover, setHover] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <div className="pic-info">
      {hover && (
        <div className="hover">
          {props.likes} likes &nbsp; &nbsp; &nbsp; {props.comments} comments
        </div>
      )}

      <img
        src={props.img}
        alt=""
        width={330}
        height={220}
        onClick={() => setShow(!false)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
      <ModalContent
        img={props.img}
        show={show}
        onHide={() => setShow(false)}
        likes={props.likes}
        comments={props.comments}
      />
    </div>
  );
}

export default GalleryPic;
