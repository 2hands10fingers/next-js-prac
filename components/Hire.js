import React, {Component} from "react";

class Hire extends Component {
  constructor() {
    super()
    this.state = {};
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

        <div className="hire--skills">
          <img
            className="hire--profile-image"
            src="http://www.glotacosm.com/css/antonio_02.jpg"
            alt="profile-shot"
          />
          <img
            className="hire--logo"
            src="http://www.glotacosm.com/img/GLOTACOSM-brandlogo.png"
            alt="profile-shot"
          />
          <p>Accumulating years of experience in the digital marketing field and in creative branding, GLOTACOSM was born.
            The creative initiative led by Antonio Nogueras is the nuanced response to highly creative branding and marketing.
            It seeks to build creative infrastructures and execute complex marketing tasks that require a combination of different creative skills.</p>

          <p>GLOTACOSM seeks to make a brainstorm look like a controlled F5 Tornado in the eye of a hurricane.
            It yearns to approach creative heights where consumers never thought possible. And while you’re wondering, its name derives from Latin and Greek to mean “World of Language”. At least it’s easier to pronounce than Schlotsky’s on the first try.</p>
          <ul>
            {this.skills().map( skill => <li key={skill}>{skill}</li>)}
          </ul>
          <style jsx>{`
      
      .hire--profile-image {
        width: calc(1429px * 0.2);
        height: calc(2000px * 0.2);
    } 
    
    `}
      
    </style>

        </div>
      </section>
    )
  }
}

export default Hire;