// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickedEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmoji = () => {
    onClickedEmoji(id)
  }

  return (
    <li>
      <button className="emoji-container" type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-img" />
      </button>
    </li>
  )
}

export default EmojiCard
