import React from "react";
import { Modal } from "react-bootstrap";
import flower from "../../assets/flower.jpg";
import { useSelector } from "react-redux";
import "./ModalContent.css";
function ModalContent(props) {
  const user = useSelector((state) => state.insta);
  return (
    <Modal {...props} size="lg" centered className="modal">
      <Modal.Body className="modal-body">
        <div className="part-1">
          <img src={props.img} />
        </div>
        <div className="part-2">
          <img src={flower} width={50} height={50} />
          <div>
            <>{user.user.name}</>
            <br />
            <>chennai</>
          </div>
        </div>
        <div className="part-3">
          <>&#10034;</>
          <br />
          <>
            liked by {props.likes} people &<br />
          </>
          <> comment by {props.comments} people</>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalContent;
