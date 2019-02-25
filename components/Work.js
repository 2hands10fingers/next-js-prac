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
      { title: "Podcast Movemnet",
        role: "Lead Developer",
        workLink: "https://podcastmovement.com/",
        descrip: "Custom theme built from mock-ups for event-based organization. Setup for the client to make backend changes.",
        img: "",
        stack: "JavaScript/jQuery, SASS, PHP, Wordpress, Webpack, Bootstrap, nodeJS",
        category: ["Pofessional"],
        built: true,
        maintained: true,
      },{
        title: "Supply Chain Automation",
        role: "Lead Developer",
        workLink: "http://supplychain.dev.square205.com",
        descrip: "Supply Chain Automation is a resource website for those interested in Supply Chain Automation to access educational resources. Custom Wordpress theme built from scratch and developed from design mock-ups. Built-in Google Analytics tracking solution to track downloads and page visits according to user meta data. Built majority of front-end. Complete with SASS styles, modals, registry logic, and gated content.",
        img: "",
        stack: "JavaScript/jQuery, SASS, PHP, Wordpress, Webpack, Python, Mailchimp, WP-Members, Gravity Forms, Bootstrap, nodeJS",
        category: ["Professional"],
        built: true,
        maintained: false
      },
      {
        title: "Money On Mobile",
        role: "Lead Developer",
        workLink: "http://moneyonmobile.us/",
        descrip: "Custom theme built from scratch. Three-part website to cater to consumers, retailers, and investors of the largest. MoneyOnMobile is a simple, easy to use mobile SMS or smart phone application that lets you connect with your money at the push of a button. With Over 200 million customers, it is one of India's larget mobile money mangagement system. Complete with twitter feed.",
        img: "",
        stack: "JavaScript/jQuery, SASS, PHP, Wordpress, Webpack, Bootstrap, nodeJS",
        category: ["Professional"],
        built: true,
        maintained: false
      },{
        title: "Autoquip",
        role: "Developer",
        workLink: "https://autoquip.com",
        descrip: "Consulted on developer operations, technical challenges, solving coding problems, and managing deployment. Perform maintenace and build new additions.",
        img: "",
        stack: "JavaScript/jQuery, ReactJS, Webpack, Bootstrap, nodeJS, Wordpress, PHP, SASS, mySQL",
        category: ["Professional"],
        built: false,
        maintained: true
      },{
        title: "Office Furniture Distributors",
        role: "Lead Developer",
        workLink: "https://ofdist.com/",
        descrip: "eCommerce website to send quotes for various office furniture items. Adapted Wordpress theme from mockups to have its look and feel. Integrated fully-functional eCommerce functions.",
        img: "",
        stack: "PHP, jQuery, WordPress, CSS, WooCommerce, Yith Plugins, GravityForms, Python, WP All Import/Export",
        category: ["Professional"],
        built: true,
        maintained: true,
      },{
        title: "Physmodo Coach Analytics App",
        role: "Front-end Developer",
        descrip: "Stylized and programmed React components for an analytics app using Material UI",
        img: "",
        stack: "JavaScript, CSS, SASS, GraphQL, React, Apollo, Chartist, JSS, Stylized Components",
        category: ["Professional"],
        built: true,
        maintained: false
      },{
        title: "color-the-innanet",
        role: "",
        workLink: "http://glotacosm.com/colortheinnanet",
        descrip: "Turned received WiFI packet data into color art to represent the individual packets as an art project.",
        img: "https://i.imgur.com/pBhk4ST.png",
        stack: "JavaScript/jQuery, HTML Canvas, CSS, Python, JSON",
        category: ["Fun"],
        repo: "https://github.com/2hands10fingers/color-the-internet",
        built: true,
        maintained: false,
      },{
        title: "movie-pal",
        role: "",
        workLink: "",
        descrip: "CLI to access omdbapi and through webscraping, Produces a user interface for quickly copying data into spreadsheet rows/columns and also provides front-end API search within the user interface.",
        img: "https://i.imgur.com/bwPMIv1.jpg",
        stack: "JavaScript/jQuery, SASS, Python, JSON, Boostrap",
        category: ["Fun"],
        repo: "https://github.com/2hands10fingers/movie-pal",
        built: true,
        maintained: false
      },{
        title: "Reddit Image Scraper v1.0-1.1",
        role: "",
        workLink: "",
        descrip: "Scrapes Reddit images from any public subreddit by a user-specified date range and saves them to your computer.",
        img: "https://i.imgur.com/e2mgH7D.png",
        stack: "Python, Reddit API",
        category: ["Freelance", "Fun"],
        repo: "https://github.com/2hands10fingers/Reddit-Image-Scraper-1.0",
        built: true,
        maintained: false
      },{
        title: "George Mason University - Institue for Biohealth Innovation",
        role: "Freelance Developer/Teacher",
        workLink: "https://ibi.gmu.edu/",
        descrip: "Aided in building this site and taught the Communications Officer how to code and maintain it.",
        img: "",
        stack: "Wordpress, CSS, PHP, Python",
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
        className={`work--container ${this.state.built ? "built" : "maintained"}`}
      >
      {this.work().map( i =>
        <WorkItem
          key={i.title + "--item"}
          title={i.title}
          role={i.role}
          workLink={i.workLink}
          descrip={i.descrip}
          img={i.img}
          stack={i.stack}
          category={i.category}
        />
      )}

    </div>
    )
  }

}

export default Work;