import React, { Component } from "react"
import CharSelect from "./CharSelect"
import ContentBlock from './ContentBlock';
import { MahContext } from "./Provider";


export default class Contact extends Component {

  constructor() {
    super()
    this.state ={
      label: undefined,
      site: undefined
    }
  }

  contactOrNah = (str) => {
    return str == "email" && "Contact"
  }
  icons = () => {
    return [
      { site: "mailto:antonio@glotacosm.com", img: 'https://glotacosm.com/img/char/char-email.png', label: "email" },
      { site: "https://github.com/2hands10fingers", img: 'https://glotacosm.com/img/char/char-github.png', label: "github" },
      { site: "https://www.linkedin.com/in/anogueras/", img: 'https://glotacosm.com/img/char/char-linkedin.png', label: "linkedin" },
      // { site: "https://www.linkedin.com/in/anogueras/", img: 'https://glotacosm.com/img/char/char-linkedin.png', label: "linkedin" }
    ]
  }

  render() {
    const { label, site } = this.state
      return (
      <div className="contact--container">
      <MahContext>
        { context => (
          <>
          <h1>Contact</h1>
          {console.log(context)}
        <div className="form">
          {this.icons().map( (info, index) =>
            <a
            key={index}
            onMouseOver={() => this.setState({label: info.label, site: info.site})}
            onMouseLeave={() => this.setState({label: undefined, site: undefined })}
            className={`contact--image-link ${info.label && info.label}`}
            onClick={context.updatePoints}
            href={info.site}
            target="_blank"
            >
              <ContentBlock>
                <img src={info.img} alt={info.label && info.label}/>
                {/* image from fontawesome https://fontawesome.com/license */}
              </ContentBlock>
            </a>
            )
          }
        </div>
        <h2>Choose Your Contact Method</h2>
        <div className="contact--char-wrapper">
        <CharSelect
          side="left"
          charName={label}
          />
{/* 
  <a href={!site ? "#" : site}>{
    !site ? "Choose Your Character" : this.contactOrNah(site)
  }</a> */}

          <div className="versus">~VS~</div>

        <CharSelect
          side="right"
          charName={"meme"}
          />
        <style jsx global>{`

.modal-main.contact {
  padding: 0;
  height: 80.2%;
  
  
  
}

.versus {
  color: white;
  height: 110px;
  line-height: 110px;
  position: absolute;
  text-shadow: 1px 2px 12px black;
  font-size: 22px;
  background: royalblue;
  border: 1px solid whitesmoke;
  padding: 0 11px;
  top: 40px;
  border-radius: 100px;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#fefcea+0,f1da36+100;Gold+3D */
  background: rgb(254,252,234); /* Old browsers */
  background: -moz-radial-gradient(center, ellipse cover, rgba(254,252,234,1) 0%, rgba(241,218,54,1) 100%); /* FF3.6-15 */
  background: -webkit-radial-gradient(center, ellipse cover, rgba(254,252,234,1) 0%,rgba(241,218,54,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: radial-gradient(ellipse at center, rgba(254,252,234,1) 0%,rgba(241,218,54,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fefcea', endColorstr='#f1da36',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  box-shadow: 1px 1px 115px magenta;
}

.contact--container {
  padding-top: 2rem;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#771e9a+20,982ad8+50,771e9a+80&0+0,0.8+2,1+0,1+99,0.8+99,0+100 */
  background: -moz-linear-gradient(top, rgba(119,30,154,1) 0%, rgba(119,30,154,0.8) 2%, rgba(119,30,154,0.8) 20%, rgba(152,42,216,0.8) 50%, rgba(119,30,154,0.8) 80%, rgba(119,30,154,0.8) 99%, rgba(119,30,154,0) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(119,30,154,1) 0%,rgba(119,30,154,0.8) 2%,rgba(119,30,154,0.8) 20%,rgba(152,42,216,0.8) 50%,rgba(119,30,154,0.8) 80%,rgba(119,30,154,0.8) 99%,rgba(119,30,154,0) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(119,30,154,1) 0%,rgba(119,30,154,0.8) 2%,rgba(119,30,154,0.8) 20%,rgba(152,42,216,0.8) 50%,rgba(119,30,154,0.8) 80%,rgba(119,30,154,0.8) 99%,rgba(119,30,154,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#771e9a', endColorstr='#00771e9a',GradientType=0 ); /* IE6-9 */
}

.contact--container h1,
.contact--container h2 {
  color: white;
  text-shadow: 1px 2px 12px black;
}



.form {
  width: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
}

.contact--container h1, 
.contact--container h2, 
.versus {
  font-family: 'Press Start 2P';
  text-align: center;
}

.contact--char-wrapper {
  display: flex;
  justify-content: space-evenly;
  position: relative;
}

.char--select-container {
  width: 50%;
}

.char--select-container.right .b--content {        
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#1e5799+20,2989d8+50,1e5799+80&0+0,1+0,1+99,1+99,0+100 */
  background: -moz-linear-gradient(45deg, rgba(30,87,153,1) 0%, rgba(30,87,153,1) 20%, rgba(41,137,216,1) 50%, rgba(30,87,153,1) 80%, rgba(30,87,153,1) 99%, rgba(30,87,153,0) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(45deg, rgba(30,87,153,1) 0%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 99%,rgba(30,87,153,0) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(45deg, rgba(30,87,153,1) 0%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 99%,rgba(30,87,153,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#001e5799',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

.char--select-container.left .b--content {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#1e5799+20,2989d8+50,1e5799+80&0+0,1+0,1+99,1+99,0+100 */
  background: -moz-linear-gradient(-45deg, rgba(30,87,153,1) 0%, rgba(30,87,153,1) 20%, rgba(41,137,216,1) 50%, rgba(30,87,153,1) 80%, rgba(30,87,153,1) 99%, rgba(30,87,153,0) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(-45deg, rgba(30,87,153,1) 0%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 99%,rgba(30,87,153,0) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(135deg, rgba(30,87,153,1) 0%,rgba(30,87,153,1) 20%,rgba(41,137,216,1) 50%,rgba(30,87,153,1) 80%,rgba(30,87,153,1) 99%,rgba(30,87,153,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#001e5799',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

.contact--image-link .b--content {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#b7deed+0,71ceef+50,21b4e2+51,b7deed+100;Shape+1+Style */
  background: rgb(183,222,237); /* Old browsers */
  background: -moz-linear-gradient(45deg, rgba(183,222,237,1) 0%, rgba(113,206,239,1) 50%, rgba(33,180,226,1) 51%, rgba(183,222,237,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(45deg, rgba(183,222,237,1) 0%,rgba(113,206,239,1) 50%,rgba(33,180,226,1) 51%,rgba(183,222,237,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(45deg, rgba(183,222,237,1) 0%,rgba(113,206,239,1) 50%,rgba(33,180,226,1) 51%,rgba(183,222,237,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b7deed', endColorstr='#b7deed',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

.contact--image-link .b--border:hover {
  border-color: brown;
}

.contact--image-link img {
  width: 170px;
  height: auto;
}

.char--char-box img {
  width: auto;
  height: 170px;
  display: block;
  margin: 0 auto;
}

.char--select-container.left .char--name {
  text-align: right;
}

.char--select-container.right .char--name {
  text-align: left;
} 

@media screen and (max-width: 767px) {
  .versus {
    padding: initial;
    line-height: 50px;
    height: 50px;
  }
}

@media screen and (max-width: 567px) {
  .form {
    width: initial;
  }
  
  .versus {
    font-size: 14px;
  }
  
  .modal-main.contact {
    height: 100%;
  } 
}

`}
        </style>
        </div>
        </>
        )}
        </MahContext>
      </div>
      
      )
  }
}