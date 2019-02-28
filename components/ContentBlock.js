import React from 'react';

const ContentBlock = ({children, classes, contentClass}) => (
  <React.Fragment>
  <div className={"b--container" + " " + classes}>
  <div className="b--border">
    <div className={"b--content" + " " + contentClass}>
      {children}
    </div>
  </div>
</div>
<style jsx>{`
  .b--border {
      border: 1.5px solid white;
      margin: 0.5px;
      display: block;
      padding: 0px;
    }

  .b--container {
      border: 1px solid black;
      // max-width: 160px;
    }

  .b--content {
      font-family: 'Press Start 2P';
      background-color: black;
      color: white;
      padding: 0.7rem;
      border-radius: 6px;
}
`}
</style>
</React.Fragment>
)

export default ContentBlock;