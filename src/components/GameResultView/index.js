const GameResultView = props => {
  const {choicesList} = props

  return (
    <>
      <div>
        <p>YOU</p>
      </div>
      <div>
        <p>OPPONENT</p>
      </div>
      <div>
        <p>YOU WON</p>
        <button type="button">PLAY AGAIN</button>
      </div>
    </>
  )
}

export default GameResultView
