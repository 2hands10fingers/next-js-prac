import React, { Component } from "react"

export default class Contact extends Component {

  icons = () => {
    return [
      { site: "mailto:antonio@glotacosm.com", img: 'https://glotacosm.com/at-solid.svg', label: "email" },
      { site: "https://github.com/2hands10fingers", img: 'https://glotacosm.com/github-brands.svg', label: "github" },
      { site: "https://www.linkedin.com/in/anogueras/", img: 'https://glotacosm.com/linkedin-in-brands.svg', label: "linkedin" }
    ]
  }

  render() {
      return (
      <div className="contact--container">
        <h1>Contact</h1>
        <div className="form">
          {this.icons().map( info =>
            <a className={`contact--image-link ${info.label && info.label}`} href={info.site}>
              {info.site && info.label}
              <img style={{width: 20, height: 20}} src={info.img} alt={info.label && info.label}/>
              {/* image from fontawesome https://fontawesome.com/license */}
            </a>
            )
          }
        </div>
      </div>
      )
  }
}
