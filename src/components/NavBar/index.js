// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScores} = props
  return (
    <div className="inner-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="logo-name"> Emoji Game </h1>
      </div>
      <div className="score-container">
        <p className="score"> Score: {score} </p>
        <p className="score"> Top Score: {Math.max(...topScores)} </p>
      </div>
    </div>
  )
}

export default NavBar
