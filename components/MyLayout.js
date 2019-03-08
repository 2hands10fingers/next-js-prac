import Sidebar from './Sidebar'
import Head from 'next/head'
import '../styles/index.sass'
import '../styles/misc.css'
import {MahContext} from "./Provider";

const {Component} = React;
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}


class Layout extends Component {
  constructor(){
  super()
  this.state = {
    show: false,
    type: "",
    currentPage: undefined,

  };
}

  showModal = () => { this.setState({ show: true, type: "built" }); };
  hideModal = () => { this.setState({ show: false, type: "" }); };
  setPage = (thePage) => {this.setState({currentPage: thePage })}

  render(){
    
    return(  
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet" />
      </Head>
      <style jsx global>{`
      body {
        background: url('http://i.imgur.com/F0gBD6c.png') 100%/cover no-repeat;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
      }

      .points {
        position: absolute;
        top: 0;
        right: 0;
        color: #76e680;
        font-family: 'Press Start 2P';
        text-shadow: 1px 2px 12px black;
        font-size: 20px;
        padding: 1rem;
      }

      .points-txt {
        font-size: 15px;
      }
      
    `}
    </style>
    <MahContext>
      {context => (
        <div className="points">
          {context.data.points }<span className="points-txt"> points</span>
        </div>
      )}
    </MahContext>
      <Sidebar menu={this.props.menu} />
    </div>
    )
    }
  }

  export default Layout