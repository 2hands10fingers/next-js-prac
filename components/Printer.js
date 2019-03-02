// import React, { Component } from "react";


// class Printer extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       arr: this.props.text,
//       theText: undefined
//     }
//   }

//   componentDidMount() {
//     this.state.arr.forEach( (letter, index) =>
//       setTimeout(()=>{
//         console.log(letter)
//         this.setState( {theText: {[index]: letter}})
//       }, 1000)
//     )
  
//   }


//   render() {
//     return (
//       <React.Fragment>
//         <p>
//           {this.state.theText && Object.values(this.state.theText).map( (letter, index) => <span>{letter}</span>)}
//         </p>
//       </React.Fragment>
//     )
//   }

// }

// export default Printer;

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
    const { arr, theText} = this.state
    return (
      <React.Fragment>
          {arr.length &&
            Object.values(this.state.theText).map((letter, index) => (
              letter == '^' ? <React.Fragment><br/><br/></React.Fragment> : <span>{letter}</span>
            ))
          }
      </React.Fragment>
    );
  }
}

export default Printer;