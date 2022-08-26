import {render, screen, fireEvent} from '@testing-library/react'
import App from './App'
import {replaceCamelWithSpaces} from './App'
// test('renders learn react link', () => {
//   render(<App />)
//   const linkElement = screen.getByRole('link', {name: /learn react/i})
//   expect(linkElement).toBeInTheDocument()
// })

// test('button has correct initial color', () => {
//   render(<App />)
//   const colorButton = screen.getByRole('button', {name: 'Change to blue'})

//   //expect the background color to be red
//   expect(colorButton).toHaveStyle({backgroundColor: 'red'})

//   //click button
//   fireEvent.click(colorButton)

//   //expect the background color to be blue
//   expect(colorButton).toHaveStyle({backgroundColor: 'blue'})

//   // expect the button text to be 'Change to Red'
//   expect(colorButton.textContent).toBe('Change to red')
// })

// test('button turns blue when clicked', () => {
//   render(<App />)

//   const colorButton = screen.getByRole('button', {name: 'Change to blue'})
// })
// test('initial condtions', () => {
//   render(<App />)
//   //check that the button starts out enabled
//   const colorButton = screen.getByRole('button', {name: 'Change to blue'})
//   expect(colorButton).toBeEnabled()
//   // check taht the checkBox starts out unchecked
//   const checkbox = screen.getByRole('checkbox')
//   expect(checkbox).not.toBeChecked()
// })

test('Checkbox disables button on first click and enables on second click', () => {
  render(<App />)
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'})
  const colorButton = screen.getByRole('button', {name: 'Change to blue'})

  expect(colorButton).toBeEnabled()

  //check button

  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled()

  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()
})

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  })
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })
})
