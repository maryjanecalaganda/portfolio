import './styles.scss'
import './intro.scss'
import './educ.scss'
import './contact.scss'
import './skills.scss'

import profile from './assets/profile.jpg'
import section3 from './assets/section 3.jpg'

import { Parallax } from 'react-parallax'

function App() {
  return (
    <div>
      <Parallax
        className="main-app"
        strength={300}
        bgImage="https://c4.wallpaperflare.com/wallpaper/36/14/561/minimalism-minimalist-mountains-landscape-wallpaper-preview.jpg"
      >
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
      <Parallax
        strength={300}
        bgImage="https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/original/10.jpg"
      >
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
