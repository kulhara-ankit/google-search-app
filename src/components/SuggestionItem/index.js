// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, onChangeSearchResult} = props
  const {suggestion} = suggestionDetails

  const onAddSearchItem = () => {
    onChangeSearchResult(suggestion)
  }

  return (
    <li className="list">
      <div className="listCard">
        <p className="list-para">{suggestion}</p>
        <button className="button" type="button" onClick={onAddSearchItem}>
          <img
            alt="arrow"
            className="a-image"
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          />
        </button>
      </div>
    </li>
  )
}
export default SuggestionItem
