/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScores: [0],
    clickedEmojiList: [],
    isClickedEmojiSame: false,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickedEmoji = id => {
    const {score, clickedEmojiList, isClickedEmojiSame} = this.state
    if (!clickedEmojiList.includes(id)) {
      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, id],
        score: prevState.score + 1,
      }))
      if (score === 11) {
        this.setState({
          isClickedEmojiSame: !isClickedEmojiSame,
        })
      }
    } else {
      this.setState({
        isClickedEmojiSame: !isClickedEmojiSame,
      })
    }
  }

  onClickPlayAgainButton = topScoreValue => {
    const {topScores} = this.state
    this.setState({
      score: 0,
      topScores: [...topScores, topScoreValue],
      clickedEmojiList: [],
      isClickedEmojiSame: false,
    })
  }

  render() {
    const {score, topScores, clickedEmojiList, isClickedEmojiSame} = this.state
    const emojisList = this.shuffledEmojisList()

    if (!isClickedEmojiSame) {
      return (
        <div className="emoji-bg-container">
          <div className="nav-bar">
            <NavBar score={score} topScores={topScores} />
          </div>
          <div className="emojis-main-container">
            <ul className="emojis-container">
              {emojisList.map(eachEmoji => (
                <EmojiCard
                  emojiDetails={eachEmoji}
                  onClickedEmoji={this.onClickedEmoji}
                  key={eachEmoji.id}
                />
              ))}
            </ul>
          </div>
        </div>
      )
    }
    return (
      <div className="emoji-bg-container">
        <div className="nav-bar">
          <div className="inner-container">
            <div className="logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
                alt="emoji logo"
                className="logo"
              />
              <p className="logo-name"> Emoji Game </p>
            </div>
          </div>
        </div>
        <div className="emojis-main-container">
          <WinOrLoseCard
            clickedEmojiList={clickedEmojiList}
            onClickPlayAgainButton={this.onClickPlayAgainButton}
          />
        </div>
      </div>
    )
  }
}

export default EmojiGame
