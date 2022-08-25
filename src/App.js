import {useState} from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [buttonColor, setButtonColor] = useState('red')
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'
  const [buttonDisabled, setButtonDisabled] = useState(false)
  return (
    <div>
      <button
        style={{backgroundColor: buttonColor}}
        disabled={buttonDisabled}
        onClick={() => {
          setButtonColor(newButtonColor)
        }}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        defaultChecked={buttonDisabled}
        aria-checked={buttonDisabled}
        onChange={e => {
          setButtonDisabled(e.target.checked)
        }}
      />
    </div>
  )
}

export default App
