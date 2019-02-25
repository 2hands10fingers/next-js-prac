import Sidebar from './Sidebar'
import Head from 'next/head'
// import bgImg from '../static/images/bg.jpg'
import '../styles/index.sass'
import '../styles/misc.css'
import PageSelector from '../components/PageSelector'
import Modal from '../components/Modal'
import Contact from '../components/Contact'
import Work from '../components/Work'
import Hire from '../components/Hire'
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

  // pageMaker = (page) => {
  //   const pages = {
  //     "contact": <Contact />,
  //     "work": <Work type={this.state.type}/>,
  //     "hire": <Hire />
  //   }

  //   return pages[page]
  // }


render(){
  
  return(  
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet" />
    </Head>
    <style jsx global>{`
    body {
      background: url('http://i.imgur.com/F0gBD6c.png') no-repeat;
    }
    
  `}
  </style>
    <Sidebar menu={this.props.menu} />
  </div>)
  }
}

export default Layout