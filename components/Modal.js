import React from "react";

const Modal = ({ handleClose, show, content }) => {
  return (
    <div className={`${show ? "modal display-block" : "modal display-none"}`}>
     <button onClick={handleClose}>X</button>
      <section className="modal-main">
        {content}
      </section>
      <style jsx>{`
    
    .modal-main {
      background-color: #483d8b;
      padding: 1.5rem;
    }
  
  
  `}
  </style>
    </div>
 
  )
};

export default Modal