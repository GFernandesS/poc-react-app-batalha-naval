import PositionsContainer from '../components/PositionsContainer'
import useWebSocket from 'react-use-websocket'
import './App.css'
import { useEffect } from 'react'

function App() {
  const positionsAlreadyMarked = []

  const { sendMessage, lastMessage } = useWebSocket('ws://localhost:3000/room?room_id=123')

  const handlePositionOnClick = event => {
    if (!positionsAlreadyMarked.includes(event.currentTarget.id)) {
      event.currentTarget.style.backgroundColor = 'black'
      positionsAlreadyMarked.push(event.currentTarget.id)
      sendMessage(event.currentTarget.id)
    }
  }

  useEffect(() => {
    if (lastMessage) {
      const idToFindElement = lastMessage.data.replace('opponent', 'user')
      const position = window.document.getElementById(idToFindElement)
      position.style.backgroundColor = 'black'
    }
  }, [lastMessage])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', height: '500px', width: '1100px' }}>
      <div>
        <span>Você</span>
        <PositionsContainer handlePositionOnClick={handlePositionOnClick} idPrefix='user' clickable={false} />
      </div>
      <div>
        <span>Adversário</span>
        <PositionsContainer handlePositionOnClick={handlePositionOnClick} idPrefix='opponent' clickable={true} />
      </div>
    </div>
  )

}

export default App
