import {render, screen, fireEvent} from '@testing-library/react'
import App from './App'

// test('renders learn react link', () => {
//   render(<App />)
//   const linkElement = screen.getByRole('link', {name: /learn react/i})
//   expect(linkElement).toBeInTheDocument()
// })

test('button has correct initial color', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', {name: 'Change to blue'})

  //expect the background color to be red
  expect(colorButton).toHaveStyle({backgroundColor: 'red'})

  //click button
  fireEvent.click(colorButton)

  //expect the background color to be blue
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'})

  // expect the button text to be 'Change to Red'
  expect(colorButton.textContent).toBe('Change to red')
})

// test('button turns blue when clicked', () => {
//   render(<App />)

//   const colorButton = screen.getByRole('button', {name: 'Change to blue'})
// })
