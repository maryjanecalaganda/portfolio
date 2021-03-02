import './styles.scss'
import './intro.scss'
import './educ.scss'
import './contact.scss'
import './hobby.scss'

import profile from './assets/profile.jpg'
import section3 from './assets/section 3.jpg'
import section2 from './assets/section 2.jpg'
import section1 from './assets/section 1.jpg'
import intropic from './assets/intro-pic.png'
import hobby from './assets/hobby.png'

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
              to="hobby"
              smooth={true}
              duration={800}
              className="ul"
            >
              Hobby
            </Link>
            <Link
              activeClass="active"
              to="contact"
              smooth={true}
              duration={700}
              className="ul"
            >
              Contact
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
            Hi, I'm <span>Mary Jane C. Calaganda</span>
          </h1>
          <p>
            I'm currently a TCM student at University of Science and Technology
            of Southern Philippines,
          </p>
          <p>
            I'm <span>21</span> years old,
          </p>
          <p>
            I'm Currently Living in <span>Gusa, Cagayan de Oro City</span>,
          </p>
          <p>
            My Nationality is <span>Filipino</span>,
          </p>
          <p>
            I was born in <span>Bukidnon</span>,
          </p>
          <p>
            My Civil Status is <span>Single</span>,
          </p>
          <p>
            And lastly my email address is <span>mjcalaganda18@gmail.com</span>
          </p>
        </div>
      </section>
      <Parallax strength={300} bgImage={section2}>
        <section id="education" className="educ">
          <div className="educ-info">
            <h1>Education Attainment</h1>
            <p>
              <span>College</span> : University of Science and Technology of
              Southern Philippines
              <br />
              <span>School Year</span> : 2018 - 2022 <br />
              <span>Course</span> : Bachelor of Science in Technology
              Communication Management
            </p>
            <hr />
            <p>
              <span>Senior High School</span> : University of Science and
              Technology of Southern Philippines <br />
              <span>School Year</span> : 2016 - 2018 <br />
              <span>Strand</span> : STEM
            </p>
            <hr />
            <p>
              <span>High School</span> : Lumbia National High School <br />
              <span>School Year</span> : 2012 - 2016 <br />
              <span>Graduated Year</span> : 2016
            </p>
            <hr />
            <p>
              <span>Elementary</span> : Balulang Elementary School
              <br />
              <span>School Year</span> : 2006 - 2012 <br />
              <span>Graduated Year</span> : 2012
            </p>
          </div>
        </section>
      </Parallax>
      <section id="hobby" className="hobby">
        <img src={hobby} alt={hobby} />
        <div className="hobbies">
          <h1>
            My <span>Hobbies are</span>
          </h1>
          <p>
            <span>Eating</span> Delicious Foods,
          </p>
          <p>
            Watching <span>Korean Drama's</span> ,
          </p>
          <p>
            Reading <span>Books</span>,
          </p>
          <p>
            Jogging <span>Daily in the morning</span>,
          </p>
          <p>
            <span>Singing</span> to my favorite musics,
          </p>
          <p>
            Sleeping <span>all day and all night</span>,
          </p>
          <p>
            And lastly for me the most <span>important</span> part is being
            happy.
          </p>
        </div>
      </section>
      <Parallax strength={300} bgImage={section3}>
        <section id="contact" className="contact">
          <h1>Contact Me</h1>
          <p>
            Email :
            <span>
              <a
                href="mailto:mjcalaganda18@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                mjcalaganda18@gmail.com
              </a>
            </span>
          </p>
          <p>
            Contact Number
            <span>
              <a href="/">+639754270609</a>
            </span>
          </p>
          <p>
            Facebook :
            <span>
              <a
                href="https://www.facebook.com/mj.calaganda"
                target="_blank"
                rel="noreferrer"
              >
                Mary Jane
              </a>
            </span>
          </p>
        </section>
      </Parallax>
    </div>
  )
}

export default App
