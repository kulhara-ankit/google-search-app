// Write your code here

import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchResult = suggestion => {
    this.setState({searchInput: suggestion})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props // passing suggestion list from App.js
    const filteredResult = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="bg-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="g-image"
            alt="google logo"
          />
          <div className="g-card">
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="s-image"
                alt=" search icon"
              />
              <input
                type="search"
                className="search-input"
                placeholder="Google Search"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
            <ul className="list-container">
              {filteredResult.map(each => (
                <SuggestionItem
                  key={each.id}
                  suggestionDetails={each}
                  onChangeSearchResult={this.onChangeSearchResult}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
