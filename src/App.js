import {useState} from 'react'
import logo from './logo.svg'
import './App.css'

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [buttonColor, setButtonColor] = useState('red')
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'
  const [disabled, setButtonDisabled] = useState(false)
  return (
    <div>
      <button
        style={{backgroundColor: buttonColor, color: 'white'}}
        onClick={() => {
          setButtonColor(newButtonColor)
        }}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={e => {
          setButtonDisabled(e.target.checked)
        }}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  )
}

export default App
