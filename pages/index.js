import Layout from '../components/MyLayout.js'
// import Modal from '../components/Modal.js'
import Link from 'next/link'

const font = "'Press Start 2P';"


const {Component} = React
// const PostLink = ({ post }) => (
//   <li>
//     <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
//       <a>{post.title}</a>
//     </Link>
//     <style jsx>{`
//       h1, a {
//         font-family: "Arial";
//       }

//       ul {
//         padding: 0;
//       }

//       li {
//         list-style: none;
//         margin: 5px 0;
//       }

//       a {
//         text-decoration: none;
//         color: blue;
//       }

//       a:hover {
//         opacity: 0.6;
//       }
//     `}</style>
//   </li>
// )

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
      <h1>Glotacosm</h1>
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
      `}</style>

      <Layout menu={this.state.start}/>
      </div>
      </React.Fragment>
    )
  }
  
}