import Link from 'next/link'
const { Component } = React

export default class Sidebar extends Component {

    constructor() {
        super()
        this.state = {
            start: false
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

    render() {
        return (  
            <ul className="sidebar" style={{display: `${this.props.menu ? "none" : "initial" }`}}>
                {this.links().map(link => (
                    <React.Fragment>
                        <Link key={link.url} href={link.url}>
                            <li className={`${
                                    link.children && "sidebar--has-children"
                                }`}>
                                <a className="sidebar--link">{link.name}</a>
                                <ul className={`sidebar--links`}>
                                    {link.children && link.children.map(childLink => (
                                        <Link key={childLink} href={`${link.url}?sort=${childLink.toLowerCase()}`}>
                                            <li>
                                                <a className="sidebar--link__child">{childLink}</a>
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                            </li>
                        </Link>
                        <style jsx>{`

                            
                            .sidebar {
                                 ${!this.props.menu && "display: none"}
                            }
                            li {
                                cursor: pointer;
                                font-family: 'Press Start 2P';
                                text-align: center;
                                list-style: none;
                                padding: 0;
                                margin: .5rem 0;
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