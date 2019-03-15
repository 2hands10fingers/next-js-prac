import React, { Component } from "react";

class Printer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: this.props.text,
      theText: ""
    };
  }

  componentDidMount() {
    this.state.arr.forEach((letter, index) =>
      setTimeout(() => {
        this.setState(state => ({
        theText:  state.theText + letter
        }));
      }, 30 * index)
    );
  }

  render() {
    const { arr, theText } = this.state
    const { animate } = this.props
    return (
      <>
          {arr.length &&
            Object.values(theText).map((letter, index) => (
              letter === '^' ?
              <><br/><br/></> :
              <span key={index} className={ animate ? "lett" : "none" }>
                {letter}
              </span>
            ))
          }
      <style jsx>{`


      .lett {
        animation: fadein 0.5s ease-in-out;
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


      `}

      </style>
      </>

    );
  }
}

export default Printer;