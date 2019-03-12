import React, { Component } from "react";
import WorkItem from "./WorkItem";

class Work extends Component {
  constructor() {
    super()
    this.state = {
      built: false,
      maintained: false
    }
  }

  componentWillMount() {
    this.props.type === "built" ?
      this.setState({ built: true }) :
      this.setState({ maintained: true })
  }


  work = () => {
    return [
      { title: "Podcast Movemnet 2019",
        subline: "",
        role: "Lead Developer",
        workLink: "https://podcastmovement.com/",
        descrip: "Custom theme built from mock-ups for event-based organization. Setup for the client to make backend changes.",
        img: "",
        stack: "HTML5, Javascript, SASS, PHP, Wordpress, Node",
        category: ["Pofessional"],
        built: true,
        maintained: true,
      },{
        title: "Supply Chain Automation",
        subline: "",
        role: "Lead Developer",
        workLink: "http://supplychain.dev.square205.com",
        descrip: "Supply Chain Automation is a resource website for those interested in Supply Chain Automation to access educational resources. Custom Wordpress theme built from scratch and developed from design mock-ups. Built-in Google Analytics tracking solution to track downloads and page visits according to user meta data. Built majority of front-end. Complete with SASS styles, modals, registry logic, and gated content.",
        img: "",
        stack: "HTML5, JavaScript, SASS, PHP, Wordpress, Python, Node",
        category: ["Professional"],
        built: true,
        maintained: false
      },
      {
        title: "Money On Mobile",
        subline: "",
        role: "Lead Developer",
        workLink: "http://moneyonmobile.us/",
        descrip: "Custom theme built from scratch. Three-part website to cater to consumers, retailers, and investors of the largest. MoneyOnMobile is a simple, easy to use mobile SMS or smart phone application that lets you connect with your money at the push of a button. With Over 200 million customers, it is one of India's larget mobile money mangagement system. Complete with twitter feed.",
        img: "",
        stack: "HTML5, JavaScript, SASS, PHP, Wordpress, Node",
        category: ["Professional"],
        built: true,
        maintained: false
      },{
        title: "Autoquip",
        subline: "",
        role: "Developer",
        workLink: "https://autoquip.com",
        descrip: "Consulted on developer operations, technical challenges, solving coding problems, and managing deployment. Perform maintenace and build new additions.",
        img: "",
        stack: "HTML5, JavaScript, React, Wordpress, PHP, SASS, Node",
        category: ["Professional"],
        built: false,
        maintained: true
      },{
        title: "Office Furniture Distributors",
        subline: "",
        role: "Lead Developer",
        workLink: "https://ofdist.com/",
        descrip: "eCommerce website to send quotes for various office furniture items. Adapted Wordpress theme from mockups to have its look and feel. Integrated fully-functional eCommerce functions.",
        img: "",
        stack: "HTML5, PHP, WordPress, CSS3, Python, Node",
        category: ["Professional"],
        built: true,
        maintained: true,
      },{
        title: "Physmodo Coach Analytics App",
        subline: "",
        role: "Front-end Developer",
        descrip: "Stylized and programmed React components for an analytics app using Material UI",
        img: "",
        stack: "HTML5, JavaScript, CSS3, SASS, React, Node",
        category: ["Professional"],
        built: true,
        maintained: false
      },{
        title: "color-the-innanet",
        subline: "",
        role: "",
        workLink: "http://glotacosm.com/colortheinnanet",
        subline: "",
        descrip: "Turned received WiFI packet data into color art to represent the individual packets as an art project.",
        img: "https://camo.githubusercontent.com/835ccd28a5e335ceac27a53d830220d04785b9b2/68747470733a2f2f692e696d6775722e636f6d2f33514f3064596e2e706e67",
        stack: "JavaScript, HTML5, CSS3, Python",
        category: ["Fun"],
        repo: "https://github.com/2hands10fingers/color-the-internet",
        built: true,
        maintained: false,
      },{
        title: "movie-pal",
        subline: "",
        role: "",
        workLink: "",
        descrip: "CLI to access omdbapi and through webscraping, Produces a user interface for quickly copying data into spreadsheet rows/columns and also provides front-end API search within the user interface.",
        img: "https://i.imgur.com/bwPMIv1.jpg",
        stack: "JavaScript, SASS, Python",
        category: ["Fun"],
        repo: "https://github.com/2hands10fingers/movie-pal",
        built: true,
        maintained: false
      },{
        title: "Reddit Image Scraper v1.0-1.1",
        role: "",
        workLink: "",
        subline: "",
        descrip: "Scrapes Reddit images from any public subreddit by a user-specified date range and saves them to your computer.",
        img: "https://i.imgur.com/e2mgH7D.png",
        stack: "Python, Reddit API",
        category: ["Freelance", "Fun"],
        repo: "https://github.com/2hands10fingers/Reddit-Image-Scraper-1.0",
        built: true,
        maintained: false
      },{
        title: "George Mason University",
        subline: "Institue for Biohealth Innovation",
        role: "Freelance Developer/Teacher",
        workLink: "https://ibi.gmu.edu/",
        descrip: "Aided in building this site and taught the Communications Officer how to code and maintain it.",
        img: "",
        stack: "Wordpress, CSS3, PHP, Python, JavaScript",
        category: ["Professional", "Freelance"],
        repo: "",
        built: true,
        maintained: true
      }
    ]
  }

  render() {
    const {built, maintained} = this.state;
    return (
      <div 
        className={`work--container ${built ? "built" : "maintained"}`}
      >
      <h1>Work</h1>
      {this.work().map( (i, index) =>
        <WorkItem
          key={i.title + "--item"}
          title={i.title}
          role={i.role}
          workLink={i.workLink}
          descrip={i.descrip}
          img={i.img}
          stack={i.stack}
          category={i.category}
          subline={i.subline}
          index={index}
          
        />

      )}
    <div className={`work--filter ${this.state.built}`}>
     <button>Built</button>
     <button>Maintained</button>
    </div>
    <style jsx global>{`
    .modal-main.work {
      background: url(https://glotacosm.com/img/conifer_forest_inner.png);
    }
      
      .work--thing, .work--thing .b--content{
        min-height: 254px !important; 
    }
      .work--container h1 {
        margin-top: 10rem;
      }

        
      .work--container .workitem--container:nth-child(odd) .workitem--img-text {
        flex-direction: row-reverse;
      }

        .workitem--container .b--container {
          margin: 0 1rem;
        }

       .work h1 {
        font-family: 'Press Start 2P';
        color: white;
        text-shadow: 1px 2px 12px black;
        text-align: center;
        font-size: 36px;
        text-transform: uppercase;
        margin-top: 12rem;
       }

       @media screen and (max-width: 1060px) {
        .work--container {
          position: initial;
        }

        .modal-main.work {
          width: 95%;
        }

        .work--container .workitem--container:nth-child(odd) .workitem--img-text {
          flex-direction: column;
        }

        .work--thing {
          position: relative;
          top: -20px;
        }
      }
        
        
        `}
        </style>
    </div>
    )
  }

}

export default Work;