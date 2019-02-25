import React from "react";

const WorkItem = (props) => (
  <div className={`workitem--container`}>
    <h2>{props.title}</h2>
    <a href={props.workLink ? props.workLink : props.repo }>
      {/* <img src={props.img ?
                  props.img :
                  "https://via.placeholder.com/500x281"} alt={props.title} /> */}
      <p className="work--stack"><span>Stack</span>: {props.stack}</p>
      <p className="work--role">Role:{props.role}</p>
      <p className="work--description">{props.descrip}</p>
      Category:
      <ul>
      {props.category.map( category => <li key={category}>{category}</li> )}
      </ul>
    </a>
    </div>
  )

  export default WorkItem;
