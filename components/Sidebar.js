
const { Component } = React
import Modal from '../components/Modal'
import Contact from '../components/Contact'
import Work from '../components/Work'
import Hire from '../components/Hire'
import { MahContext } from "./Provider";

export default class Sidebar extends Component {

    constructor() {
        super()
        this.state = {
            start: false,
            haschildren: false,
            show: false,
            freePoints: true,
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
            { name: "Work", url: "/work", children: ["All", "Built", "Maintained"] },
            { name: "Contact", url: "/contact" },
            { name: "Hire", url: "/hire", background: "// https://www.glotacosm.com/orientpixel-bg.jpg" }
        ]
    }

    builtOrMaintainedHandler = checked => {
        console.log(checked.toLowerCase());
         (checked.toLowerCase() === "built" ||
          checked.toLowerCase() === "maintained" ||
          checked.toLowerCase() === "all" ) ? checked : "";
    }

    subMenuToggler = () => this.setState({haschildren: !this.state.haschildren})

    hideModal = () => this.setState({ show: false, type: "" });

    setPage = thePage => this.setState({currentPage: thePage, show: true })

    blaher = (link, updateThePoints, updateTheType) => (
        <li className={`${link.children && "sidebar--has-children"}`}
            onClick={() => {
                link.children && this.subMenuToggler();
                updateThePoints();

            }}>
        <div
            className="sidebar--link"
            onClick={() => {
                this.setPage(link.name.toLowerCase())
                updateThePoints();
            }}>
            {link.name}
        </div>
        <ul
          className={`sidebar--links`}
          >
            {link.children && link.children.map(childLink => (
                <div
                    onClick={()=> {
                        this.builtOrMaintainedHandler(childLink, updateTheType);
                        this.setPage(link.name.toLowerCase())
                        updateTheType(
                            (childLink.toLowerCase() === "built" ||
                             childLink.toLowerCase() === "maintained" ) ?
                                childLink.toLowerCase() : "");
                     }}
                    key={childLink}
                    >
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
        const {freePoints, haschildren, show, pages, currentPage} = this.state
        const { menu} = this.props
        return (
            <>
            <MahContext>
            { context => (
            <>
            <ul className="sidebar" style={{display: `${menu ? "none" : "initial" }`}}>
                {this.links().map(link => (
                  <>
                        {!link.children ?
                        <div key={link} onClick={() => this.setPage(link.name.toLowerCase())} >
                            {this.blaher(link, context.updatePoints, context.updateType)}
                        </div>
                         :
                            this.blaher(link, context.updatePoints, context.updateType)
                        }

                        <style jsx global>{`
                            .sidebar {
                                 ${!menu && "display: none"}
                            }
                            .sidebar--has-children {
                                position: relative;
                            }

                            .sidebar--has-children .sidebar--links {

                                ${!haschildren ? "display: none;" : "display: initial;"}
                                animation: fadein 0.3s eas-in-out;
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

                            .sidebar--has-children .sidebar--link {
                              pointer-events: none;
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

                              .free-points {
                                font-size: 19px;
                                text-transform: uppercase;
                                font-family: 'Press Start 2P';
                                text-shadow: 0px 3px 1px darkgreen;
                                text-align: center;
                                background-color: forestgreen;
                                color: white;
                                height: 50px;
                                display: block;
                                margin: 0 auto;
                                border-color: #007500;
                                cursor: pointer;
                            }


                        `}</style>

                    </>


                ))}
            </ul>
            {
              freePoints &&
                <button
                className="free-points"
                onClick={()=>{
                    context.updatePoints(1000);
                    this.setState({freePoints: false})
                }}>
                    Click Here for Free Points
                </button>
            }
            </>
            )}
            </MahContext>


        <>
        <Modal
                show={show}
                handleClose={this.hideModal}
                content={pages[currentPage]}
                pageClass={currentPage}
                type={this.state.type}
            />
        </>

        </>
        )

    }
}