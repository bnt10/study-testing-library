import {screen, render, fireEvent} from '@testing-library/react'
import {waitForElementToBeRemoved, waitFor} from '@testing-library/dom'
import SummaryForm from '../SummaryForm'
import userEvent from '@testing-library/user-event'
import React from 'react'
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
  userEvent.click(checkbox)
  expect(confirmButton).toBeEnabled()

  userEvent.click(checkbox)
  expect(confirmButton).toBeDisabled()
})

test('popover responds to hover', async () => {
  render(<SummaryForm />)

  //popoover starts out hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  )
  expect(nullPopover).not.toBeInTheDocument()

  //   //popover appears upon mouseover of chceckbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i)
  userEvent.hover(termsAndConditions)

  const popover = screen.getByText(/no ice cream will actually be delivered/i)
  expect(popover).toBeInTheDocument()

  //   //popvoer disappears when we mouse out
  userEvent.unhover(termsAndConditions)
  await waitForElementToBeRemoved(() => {
    return screen.queryByText(/no ice cream will actually be delivered/i)
  })
})
