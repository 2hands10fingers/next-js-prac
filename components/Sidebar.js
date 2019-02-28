
const { Component } = React
import Modal from '../components/Modal'
import Contact from '../components/Contact'
import Work from '../components/Work'
import Hire from '../components/Hire'

export default class Sidebar extends Component {

    constructor() {
        super()
        this.state = {
            start: false,
            haschildren: false,
            show: false,
            type: "",
            currentPage: undefined,
            pages: {
                "contact": <Contact />,
                "work": <Work />,
                "hire": <Hire />
              }
        }
    }

    links = () => {
        return [
            { name: "Work", url: "/work", children: ["Built", "Maintained"] },
            { name: "Contact", url: "/contact" },
            { name: "Hire", url: "/hire", background: "// https://www.glotacosm.com/orientpixel-bg.jpg" }
        ]
    }

    subMenuToggler = () => this.setState({haschildren: !this.state.haschildren})
    
    hideModal = () => this.setState({ show: false, type: "" });
    
    setPage = thePage => this.setState({currentPage: thePage, show: true })
    
    blaher = link => (
        <li className={`${link.children && "sidebar--has-children"}`} 
            onClick={link.children && this.subMenuToggler}>
        <div className="sidebar--link" onClick={() => this.setPage(link.name.toLowerCase())}>{link.name}</div>
        <ul 
          className={`sidebar--links`}
          >
            {link.children && link.children.map(childLink => (
                <div 
                    key={childLink} 
                    href={`${link.url}?sort=${childLink.toLowerCase()}`}>
                    <li>
                        <div className="sidebar--link__child">
                            {childLink}
                        </div>
                    </li>
                </div>
            ))}
        </ul>
    </li>
    )

    render() {
        return (  
            <React.Fragment>
            <ul className="sidebar" style={{display: `${this.props.menu ? "none" : "initial" }`}}>
                {this.links().map(link => (
                    <React.Fragment>
                        {!link.children ? 
                        <div key={link} onClick={() => this.setPage(link.name.toLowerCase())} >
                            {this.blaher(link)}
                        </div>
                         :
                            this.blaher(link)
                        }
                      
                        <style jsx global>{`
                            .sidebar {
                                 ${!this.props.menu && "display: none"}
                            }
                            .sidebar--has-children {
                                position: relative;
                            }

                            .sidebar--has-children li{
                                ${!this.state.haschildren && "display: none;"}
                            }
                            .sidebar--has-children:before {
                                content: '';
                                top: 17px;
                                right: 0;
                                border-style: inset; 
                                position: absolute;
                                width: 0;
                                height: 0;
                                border-style: solid;
                                border-width: 10px 12.5px 0 12.5px;
                                border-color: white transparent transparent transparent;
                                
                            }
                            
                            .sidebar--has-children .sidebar--links li:hover {
                                background-color: lightgreen;
                            }

                            .sidebar li {
                                cursor: pointer;
                                font-family: 'Press Start 2P';
                                text-align: center;
                                list-style: none;
                                padding: 0;
                                margin: .5rem auto;
                                width: 235px;
                                display: block;
                                color: white;
                                text-shadow: 1px 6px 0px black;
                            }

                            .sidebar li:hover {
                                background-color: green;
                            }


                            .sidebar--links, sidebar {
                                padding: 0;
                            }

                            .sidebar--link {
                                font-size: 36px;                                
                            }

                            .sidebar--link__child {
                                font-size: 18px;
                            }

                            .modal {
                                position: fixed;
                                top: 0;
                                left: 0;
                                width:100%;
                                height: 100%;
                                background: rgba(0, 0, 0, 0.6);
                              }
                              
                              .work--container {
                                position: absolute;
                              }
                              .modal-main {
                                position:fixed;
                                background: white;
                                right: 0;
                                bottom: 0;
                                width: 80%;
                                height: 880px;
                                top:50%;
                                left:50%;
                                transform: translate(-50%,-50%);
                                overflow:  auto;
                              }
                              
                              .display-block {
                                display: block;
                              }
                              
                              .display-none {
                                display: none;
                              }
                        
                        `}</style>
 
                    </React.Fragment>
   
                    
                ))}
            </ul>
        
        <React.Fragment>
        <Modal 
                show={this.state.show} 
                handleClose={this.hideModal}
                content={this.state.pages[this.state.currentPage]}
                pageClass={this.state.currentPage}
            />
        </React.Fragment>
</React.Fragment>
        )
        
    }
}