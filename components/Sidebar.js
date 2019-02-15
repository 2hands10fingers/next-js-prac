import Link from 'next/link'
const { Component } = React

export default class Sidebar extends Component {

    constructor() {
        super()
        this.state = {
            start: false,
            haschildren: false
        }
    }

    links = () => {
        return [
            { name: "Home", url: "/" },
            { name: "Work", url: "/work", children: ["Built", "Maintained"] },
            { name: "Contact", url: "/contact" },
            { name: "Hire", url: "/hire"}
        ]
    }

    subMenuToggler = () => {
        console.log('HI')
        this.setState({haschildren: !this.state.haschildren})}

    // menuHover = () => {

    // }

    blaher = (link) => (
        <li className={`${link.children && "sidebar--has-children"}`} onClick={link.children && this.subMenuToggler}>
        <a className="sidebar--link">{link.name}</a>
        <ul 
          className={`sidebar--links`}
          >
            {link.children && link.children.map(childLink => (
                <Link 
                    key={childLink} 
                    href={`${link.url}?sort=${childLink.toLowerCase()}`}>
                    <li>
                        <a className="sidebar--link__child">
                            {childLink}
                        </a>
                    </li>
                </Link>
            ))}
        </ul>
    </li>
    )

    render() {
        return (  
            <ul className="sidebar" style={{display: `${this.props.menu ? "none" : "initial" }`}}>
                {this.links().map(link => (
                    <React.Fragment>
                        {!link.children ? 
                        <Link key={link.url} href={link.url}>
                            {this.blaher(link)}
                        </Link> :
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

                            li {
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

                            li:hover {
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
                        
                        `}</style>
                    </React.Fragment>
                ))}
            </ul>
        )
    }
}