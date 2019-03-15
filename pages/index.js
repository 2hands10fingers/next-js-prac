import Layout from '../components/MyLayout.js'
import Printer from '../components/Printer';
import MyProvider from "../components/Provider";
const {Component} = React
const font = "'Press Start 2P';"

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = { start: true }
  }

  pressStart = () => this.setState({ start: !this.state.start})

  render() {
    return (
      <MyProvider>
      <>

      <div className="portfolio--wrapper">
      <h1 className="portfolio--header">
        <Printer text={"Glotacosm".split("")}/>
      </h1>
      <h2 className="portfolio--header second">
        <Printer text={"Web Development PORTFOLIO".split("")}/>
      </h2>

      <button className="start-button blink"
        style={{display: `${!this.state.start && "none"}`}}
        onClick={this.pressStart}>
        Click Here to Continue
      </button>
      <style jsx>{`

      .start-button {
        display: block;
        margin: 1.5rem auto;
        font-family: ${font}
        text-transform: uppercase;
        border: none;
        color: white;
        background-color: transparent;
        text-shadow: 1px 3px 0px black;
      }

      .portfolio--wrapper > .portfolio--header {
        margin-top: 5rem;
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

      .points {
        color: white;
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
          font-size: 37px;
        }
      }

      @media screen and (max-width: 567px) {
        .portfolio--header {
          font-size: 32px;
        }

        body {
          background: url(http://i.imgur.com/F0gBD6c.png) 90%/cover no-repeat !important;
        }

        .portfolio--header.second {
          font-size: 20px;
        }

        .free-points {
          width: 282px;
        }
      }

      `}</style>

      <Layout menu={this.state.start}/>
      </div>


      </>
            </MyProvider>
    )
  }
}