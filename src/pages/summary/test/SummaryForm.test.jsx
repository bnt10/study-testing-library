import {screen, render, fireEvent} from '@testing-library/react'
import SummaryForm from '../SummaryForm'

test('SummaryForm init', () => {
  render(<SummaryForm />)
  const checkbox = screen.getByRole('checkbox', {name: /terms and conditions/i})
  expect(checkbox).not.toBeChecked()
  const confirmButton = screen.getByRole('button', {name: /confirm order/i})
  const button = screen.getByRole('button')
})

test('Checkbox enables button on first click and disabled on second click', () => {
  render(<SummaryForm />)
  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  })
  const confirmButton = screen.getByRole('button', {name: /confirm order/i})
  fireEvent.click(checkbox)
  expect(confirmButton).toBeEnabled()

  fireEvent.click(checkbox)
  expect(confirmButton).toBeDisabled()
})
