import React from "react";
import "./Modal.scss";

const Modal = () => {
  return (
    <React.Fragment>
      <div className="Modal-overlay">
        <div className="Modal">
          <p className="title">Modal Title</p>
          <div className="content">
            <p> Modal contents 입니다</p>
          </div>
          <div className="button-wrap">
            <button>Looks Good!</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
