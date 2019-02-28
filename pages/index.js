import Layout from '../components/MyLayout.js'
import Printer from '../components/Printer';

const font = "'Press Start 2P';"


const {Component} = React

export default class extends Component {
  constructor() {
    super()
    this.state = {
      start: true
    }
  }

  pressStart = () => this.setState({ start: !this.state.start})



  render() {
    return (
      <React.Fragment>
      <div className="portfolio--wrapper">
      <h1 className="portfolio--header">
        <Printer text={"Glotacosm".split("")}/>
      </h1>
      <h2 className="portfolio--header">
        <Printer text={"Web Development PORTFOLIO".split("")}/>
      </h2>
      <blink>
      <button className="start-button blink"
        style={{display: `${!this.state.start && "none"}`}} 
        onClick={this.pressStart}>
        Click Here to Continue
      </button>
      </blink>
      <style jsx>{`
      
      .start-button {
        display: block;
        margin: 0 auto;
        font-family: ${font}
        text-transform: uppercase;
        border: none;
        color: white;
        background-color: transparent;
        text-shadow: 1px 10px 0px black;
      }
      h1 {
        font-family: ${font}
        text-align: center;
        font-size: 75px;
        color: white;
        text-transform: uppercase;
        text-shadow: 1px 5px 0px black;
      }

      h2 {
        font-family: ${font}
        text-align: center;
        font-size: 30px;
        color: white;
        text-transform: uppercase;
        text-shadow: 1px 5px 0px black;

      }

      blink {
        -webkit-animation: 2s linear infinite condemned_blink_effect; // for android
        animation: 2s linear infinite condemned_blink_effect;
    }
    @-webkit-keyframes condemned_blink_effect { // for android
        0% {
            visibility: hidden;
        }
        50% {
            visibility: hidden;
        }
        100% {
            visibility: visible;
        }
    }
    @keyframes condemned_blink_effect {
        0% {
            visibility: hidden;
        }
        50% {
            visibility: hidden;
        }
        100% {
            visibility: visible;
        }
    }
    @media screen and (max-width: 767px) {
      .portfolio--header {
        font-size: 57px;
      }
    }

    @media screen and (max-width: 567px) {
      .portfolio--header {
        font-size: 32px;
      }

      body {
        background-position: left;
      }
    }
     
      `}</style>

      <Layout menu={this.state.start}/>
      </div>
      </React.Fragment>
    )
  }
  
}