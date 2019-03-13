import React from "react";
import { MahContext } from "./Provider";

const Modal = ({ handleClose, show, content, pageClass }) => {
  return (
    <MahContext>
      {context => (

        <>
    <div className={`${show ? "modal display-block" : "modal display-none"}`}>

     <button className="close--modal" onClick={()=> {handleClose(); context.updateType("")}}>X</button>
      <section className={`modal-main ${!undefined && pageClass}`}>
        {content}
      </section>
      <style jsx>{`
    
    .modal-main {
      background-color: #483d8b;
      padding: 1.5rem;
      animation: fadein 0.5s ease-in-out;
    }
    
    .close--modal {
      position: relative;
      z-index: 2;
      border: 1px solid white;
      background-color: black;
      color: white;
      font-family: 'Press Start 2P';
      font-size: 20px;
    }
    
    @-webkit-keyframes fadeout {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }
    @-moz-keyframes fadeout {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }
    @-o-keyframes fadeout {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }
    @keyframes fadeout {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }
    
    @-webkit-keyframes fadein {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }
    @-moz-keyframes fadein {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }
    @-o-keyframes fadein {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }
    @keyframes fadein {
      0%   { opacity: 0; }
      100% { opacity: 1; }
    }
    
    
    @media screen and (max-width: 767px) {
      .modal-main {
        width: 90%;
      }
    }
    
    @media screen and (max-width: 567px) {
      .modal-main {
        width: 100%;
      }
      
      .close--modal {
        font-size: 40px;
      }
    }
    
    
    `}
  </style>
    </div>
    </>
    )}
  </MahContext>
 
  )
};

export default Modal