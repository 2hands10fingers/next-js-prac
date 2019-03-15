import React from "react";
import ContentBlock from './ContentBlock';

const WorkItem = (props) => (
  <div className={`workitem--container`}>
  <div className={`workitem--title ${props.subline && 'with-subline'}`}>
    <h2>{props.title}</h2>
    {props.subline && <h3>{props.subline}</h3>}
  </div>
    <div className="workitem--img-text">
      <a
        target="_blank"
        href={props.workLink ? props.workLink : props.repo }>
        <img
          src={props.img ? props.img : "https://via.placeholder.com/500x281"}
          alt={props.title} />
        </a>
        <ContentBlock classes="work--thing">
          <p className="work--description">{props.descrip}</p>
        </ContentBlock>
      </div>

      <ContentBlock>
      <div className="work--meta">
        <div className="work--meta__left">
        <div className="work-role-cat">
          <p className="work--role">Role:{props.role}</p>
          {props.category.length < 2 ? <p>Category</p> : <p>Categories</p>}
        </div>

        <ul>
          {props.category.map( (category, index) => <li key={index}>{category}</li> )}
        </ul>
        </div>
        <div className="work--meta__right">
        <a
          target="_blank"
          href={props.workLink ? props.workLink : props.repo }>
          {props.workLink ? "Visit Site" : "Visit Repo"}
        </a>
        </div>
        </div>
      </ContentBlock>
      <p className="work--stack">
          {
            props.stack.split(", ").map( (stack, index) => (
            <img key={index} src={`https://glotacosm.com/img/icons/${stack.toLowerCase()}.svg`} />
            ))
          }
        </p>
      <style jsx>{`

      .workitem--container p,
      .workitem--container h2,
      .workitem--container h3,
      .workitem--container li,
      .workitem--container a {
        font-family: 'Press Start 2P';
        color: white;
      }

      .work--stack {
        display: flex;
        justify-content: space-evenly;
        background-color: #e672b1;
        border-radius: 13px;
        padding: 1rem;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        margin: 1rem 0rem;
      }

      .workitem--container h2 {
        margin: 0;
      }

      .workitem--container h3 {
        margin: 0rem;
        font-size: 15px;

      }

      .workitem--title {
        text-align: center;
        text-shadow: 1px 2px 12px black;
        background-color: #e672b1;
        line-height: 70px;
        height: 70px;
        border-top-right-radius: 13px;
        border-top-left-radius: 13px;
        border-bottom: 3px dashed white;
        margin-bottom: 1rem;
      }

      .workitem--title.with-subline {
        line-height: 35px;
      }

      .work--meta__right {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .work--meta {
        display: flex;
        justify-content: space-around;
      }

      .work--meta__right a {
        text-decoration: none;
        background-color: green;
        height: 30px;
        line-height: 30px;
        padding: 1rem;
        border: 2px solid green;
        transition: 0.3s ease-in-out
    }

    .work--meta__right a:hover {
      cursor: pointer;
      background-color: white;
      border: 2px solid green;
      color: green;
    }

      .workitem--container {
        margin: 5rem 1rem;
        border-radius: 13px;
        background-color: #5142ab63;
        animation: fadeIn 1s ease-in-out;
        box-shadow: 1px 2px 1px black;

      }



      .workitem--img-text {
        margin-bottom: 1rem !important;
      }

      .workitem--img-text img {
        margin: 0 1rem;
        width: 500px;
        height: 281px;
        border: 2px solid white;
      }

      .work--stack {
        border-top: 3px dashed white;
      }

     .work--stack img {
        width: 40px;
        height: 40px;
      }

      .workitem--img-text {
        display: flex;
        align-items: center;
      }

      .work--description {
        padding: 1rem;
      }

      .workitem--container .b--content {
        height: 254px;
      }

      .workitem--container .b--container {
        height: 254px;
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

      @media screen and (max-width: 1060px) {
        .workitem--img-text {
          flex-direction: column;
        }

        .modal-main.work {
          width: 100%;
        }

        .work--container {
          position: initial;
        }

        .workitem--title {
          height: auto;
          line-height: 46px;
        }

        .workitem--img-text img {
          width: calc(500px * 0.8);
          height: calc(281px * 0.8);
        }

        .work h1 {
          margin-top: 1rem;
        }

        .work--meta {
          flex-direction: column;
        }

        .work--meta__right {
          text-align: center;
        }
      }

      @media screen and (max-width: 460px) {
        .workitem--img-text img {
          width: calc(500px * 0.6);
          height: calc(281px * 0.6);
        }
      }



      `}

      </style>

    </div>
  )

  export default WorkItem;
