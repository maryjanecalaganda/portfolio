import './styles.scss'
import './intro.scss'
import './educ.scss'
import './contact.scss'
import './skills.scss'

import profile from './assets/profile.jpg'
import section3 from './assets/section 3.jpg'
import section2 from './assets/section 2.jpg'
import section1 from './assets/section 1.jpg'
import intropic from './assets/intro-pic.png'

import { Parallax } from 'react-parallax'
import { Link } from 'react-scroll'
function App() {
  return (
    <div>
      <Parallax className="main-app" strength={300} bgImage={section1}>
        <div className="img">
          <img src={profile} alt={profile} />
          <div className="li">
            <Link
              activeClass="active"
              to="introduction"
              smooth={true}
              duration={500}
              className="ul"
            >
              Introduction
            </Link>
            <Link
              activeClass="active"
              to="education"
              smooth={true}
              duration={600}
              className="ul"
            >
              Education
            </Link>
            <Link
              activeClass="active"
              to="contact"
              smooth={true}
              duration={800}
              className="ul"
            >
              Contact
            </Link>
            <Link
              activeClass="active"
              to="skills"
              smooth={true}
              duration={700}
              className="ul"
            >
              Skills
            </Link>
          </div>
        </div>
        <div className="name">
          <h1>Mary Jane Calaganda</h1>
        </div>
      </Parallax>
      <section id="introduction" className="intro">
        <img src={intropic} alt={intropic} />
        <div className="me">
          <h1>
            Hi, I'm <span>Mary Jane C. Calaganda</span>{' '}
          </h1>
          <p>
            I'm currently a TCM student at University of Science and Technology
            of Southern Philippines.
          </p>
          <p>I'm 21 years old.</p>
        </div>
      </section>
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
