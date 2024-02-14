import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import GameResultView from './components/GameResultView'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  gameResultsView = () => <GameResultView choicesList={choicesList} />

  render() {
    const closeButton = <RiCloseLine />
    return (
      <div className="app-container">
        <div className="heading-container">
          <h1 className="heading">
            ROCK <br /> PAPER <br /> SCISSORS
          </h1>
          <div className="score-container">
            <p className="score-text">Score</p>
            <p className="score">0</p>
          </div>
        </div>
        <div>
          <div className="first-two-options">
            <button
              data-testid="rockButton"
              type="button"
              className="btn-style"
              onClick={this.gameResultsView}
            >
              <img
                className="image"
                src={choicesList[0].imageUrl}
                alt={choicesList[0].id}
              />
            </button>
            <button
              data-testid="paperButton"
              type="button"
              className="btn-style"
            >
              <img
                src={choicesList[1].imageUrl}
                alt={choicesList[1].id}
                className="image"
              />
            </button>
          </div>
          <button
            data-testid="scissorsButton"
            type="button"
            className="third-btn-style"
          >
            <img
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              className="image"
            />
          </button>
        </div>
        <Popup
          modal
          trigger={
            <button type="button" className="rules-btn">
              RULES
            </button>
          }
        >
          {close => (
            <>
              <div className="popup-container">
                <button
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  {closeButton}
                </button>

                <img
                  className="popup-content"
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </div>
            </>
          )}
        </Popup>
      </div>
    )
  }
}

export default App
