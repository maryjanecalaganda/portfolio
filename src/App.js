import './styles.scss'

import profile from './assets/profile.jpg'

function App() {
  return (
    <div className="main-app">
      <div className="img">
        <img src={profile} alt={profile} />
        <div className="li">
          <div className="ul">Introduction</div>
          <div className="ul">Education</div>
          <div className="ul">Contact</div>
          <div className="ul">Skills</div>
        </div>
      </div>
      <div className="name">
        <h1>Mary Jane Calaganda</h1>
      </div>
    </div>
  )
}

export default App
