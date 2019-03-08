import React, {Component} from "react";
import ContentBlock from './ContentBlock';
import Printer from './Printer';
import { MahContext } from "./Provider";


let text = "Accumulating years of experience in the digital marketing field and in creative branding, GLOTACOSM was born. The creative initiative led by Antonio Nogueras is the nuanced response to highly creative branding and marketing. It seeks to build creative infrastructures and execute complex marketing tasks that require a combination of different creative skills.^ GLOTACOSM seeks to make a brainstorm look like a controlled F5 Tornado in the eye of a hurricane. It yearns to approach creative heights where consumers never thought possible. And while you’re wondering, its name derives from Latin and Greek to mean “World of Language”. At least it’s easier to pronounce than Schlotsky’s on the first try."

class Hire extends Component {
  constructor() {
    super()
    this.state = {
      text: ""
    };
  }

  printer = (str) => {
    console.log(str.split(""))
    return str.split("")
  }

  skills = () => {
    return [
      "HTML5",
      "CSS3",
      "SASS",
      "PHP",
      "JavaScript",
      "React",
      "Boostrap",
      "GraphQL",
      "mySQL",
      "Wordpress Custom Theme Building",
      "Python 3",
      "Ableton",
      "Digital Marketing Consultation",
      "Graphic Design",
      "Copywriting"
    ]
  }

  render() {
    return (
      <section className="hire--wrapper">
      <MahContext>
        { context => (

        <>
        <h1>Hire Me</h1>
        <h2>~ The Legend ~</h2>
        <div className="hire--skills">     
          {/* <img
            className="hire--logo"
            src="http://www.glotacosm.com/img/GLOTACOSM-brandlogo.png"
            alt="profile-shot"
          /> */}

       
   
        <ContentBlock contentClass={"main--info"}>
                  <div className="hire--text">
          <p>
            <Printer animate text={text.split("")}/>
          </p>
            
          </div>
          <ContentBlock classes={"profile"}>
            <img src="http://www.glotacosm.com/pixelme.png" alt="profile-shot" className="hire--profile-image" />
            <style jsx global>{`
            .hire--wrapper {
              padding: 15px 0;
            }
            .hire--wrapper h1, .hire--wrapper h2 {
              font-family: 'Press Start 2P';
              text-align: center;
            }

            .hire--wrapper h2 {
              color: white;;
              text-shadow: 1px 2px 10px black;
            }
            .profile {
                max-width: 460px;
                max-height: 190px;
                margin-top: 15px;
            }

            .modal-main.hire {
              background: url(https://www.glotacosm.com/orientpixel-bg.jpg) 100%/cover no-repeat;
              overflow-y: scroll;
              scrollbar-width: none;
              -ms-overflow-style: none;
              height: 100%;
            }

          }
          .modal-main.hire::-webkit-scrollbar { 
              width: 0;
              height: 0;
          }

            .hire--skills {
              margin-top: 15px;
            }

            .hire--profile-image {
              height: 210px;
              position: relative;
              top: 12px;
            }

            .main--info {
              display: flex;
              min-height: 260px;
            }

            .hire--text {
              padding: 0 10px;
              line-height: 1.5;
            }

            .hire--skills-container {
              display: flex;
              width: 100%;
              flex-wrap: wrap;
              justify-content: center;
              padding: 0;
          }

            .hire--skills-wrapper h2 {
              margin-top: 4rem;
            }

            .hire--skill {
              margin: 2rem;
              background-color: black;
              padding: 10px 5px;
              display: flex;
              justify-content: center;
              flex-direction: column;
              text-shadow: 1px 2px 0px #ffeb3ba1;
              width: 20%;
              min-height: 160px;
              color: white;
              text-align: center;
              font-family: 'Press Start 2P';
              background: url(https://glotacosm.com/spellbook-pixel.png) 100%/contain no-repeat;
              color: black;
              font-size: 14px;
          }

          

            @media screen and (max-width: 767px) {
              .main--info {
                flex-direction: column-reverse;
              }
              .profile .b--border {
                width: 100%;
                margin: 0 0 0 auto !important;
            }
              .profile {
                max-width: initial;
              }

              .hire--skill {
                margin: 1.5rem;
              }

              .hire--text {
                font-size: 14px;
              }

              .hire--profile-image {
                margin: 0 auto;
                display: block;
              }
            }

            .button--link {
              text-align: center;
              padding: 1rem;
            }

            .button--link a {
              width: 50px;
              height: 72px;
              padding: 0.6rem;
              text-transform: capitalize;
              font-size: 20px;
              text-decoration: none;
              font-family: 'Press Start 2P';
              color: black;
              background-color: green;
          }

          .button--link a:hover{
            color: green;
            background-color: black;
            cursor: pointer;
          }

          @media screen and (max-width: 567px) {

            .hire--wrapper h2 {
              font-size: 20px;
            }
            .modal-main.hire {
              height: 100%;
              width: 90%;
          }  
          .hire--wrapper: {
            width: 50%;
          }

          .hire--skill {
            margin: 0.6rem;
            width: 40%;
            font-size: 15px;
          }
        }
        
        @media screen and (max-width: 478px) {
          .hire--skill {
            width: 66%;
          }
        }
    `}

      
    </style>
          </ContentBlock>
   
          </ContentBlock>
          <div className="hire--skills-wrapper">
            <h2>~ My Book of Spells ~</h2>
          
          <ul className="hire--skills-container">
            {this.skills().map( skill => <li className="hire--skill" onClick={context.updatePoints}key={skill}>{skill}</li>)}
          </ul>
        </div>
        </div>
          <div>
            <h2>Visit the GitHub</h2>
          </div>
          <div className="button--link">
            <a target="_blank" href="https://github.com/2hands10fingers">Visit</a>
          </div>
          </>
            )}
          </MahContext>
      </section>
    )
  }
}

export default Hire;