import './styles.scss'
import './intro.scss'
import './educ.scss'
import './contact.scss'
import './skills.scss'

import profile from './assets/profile.jpg'
import section3 from './assets/section 3.jpg'
import section2 from './assets/section 2.jpg'
import section1 from './assets/section 1.jpg'

import { Parallax } from 'react-parallax'

function App() {
  return (
    <div>
      <Parallax className="main-app" strength={300} bgImage={section1}>
        <div className="img">
          <img src={profile} alt={profile} />
          <div className="li">
            <a href="#introduction" className="ul">
              Introduction
            </a>
            <a href="#education" className="ul">
              Education
            </a>
            <a href="#contact" className="ul">
              Contact
            </a>
            <a href="#skills" className="ul">
              Skills
            </a>
          </div>
        </div>
        <div className="name">
          <h1>Mary Jane Calaganda</h1>
        </div>
      </Parallax>
      <section id="introduction" className="intro"></section>
      <Parallax strength={300} bgImage={section2}>
        <section id="education" className="educ"></section>
      </Parallax>
      <section id="skills" className="skills"></section>
      <Parallax strength={300} bgImage={section3}>
        <section id="contact" className="contact"></section>
      </Parallax>
    </div>
  )
}

export default App
