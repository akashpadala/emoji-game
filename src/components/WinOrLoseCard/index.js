// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {clickedEmojiList, onClickPlayAgainButton} = props

  const onClickPlayAgain = () => {
    onClickPlayAgainButton(clickedEmojiList.length)
  }

  if (clickedEmojiList.length === 12) {
    return (
      <div className="result-container">
        <div className="text-container">
          <h1 className="title"> You Won </h1>
          <div className="score-display-container">
            <p className="best-score"> Best Score </p>
            <p className="score-details">{clickedEmojiList.length}/12</p>
            <button
              className="play-again-button"
              type="button"
              onClick={onClickPlayAgain}
            >
              Play Again
            </button>
          </div>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
          className="result-img"
        />
      </div>
    )
  }
  return (
    <div className="result-container">
      <div className="text-container">
        <h1 className="title"> You Lose </h1>
        <div className="score-display-container">
          <p className="best-score"> Score </p>
          <p className="score-details">{clickedEmojiList.length}/12</p>
          <button
            className="play-again-button"
            type="button"
            onClick={onClickPlayAgain}
          >
            Play Again
          </button>
        </div>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
        className="result-img"
      />
    </div>
  )
}

export default WinOrLoseCard
