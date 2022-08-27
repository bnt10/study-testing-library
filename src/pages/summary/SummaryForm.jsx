import {useState} from 'react'
import {Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'

function SummaryForm() {
  const [checkboxChecked, setCheckboxChecked] = useState(false)

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  )

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{color: 'blue'}}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  )
  return (
    <Form>
      <Form.Group controlId="terms and condtions">
        <Form.Check
          type="checkbox"
          checked={checkboxChecked}
          onChange={e => {
            setCheckboxChecked(e.target.checked)
          }}
          label={checkboxLabel}
        />
        <Button variant="primary" type="submit" disabled={!checkboxChecked}>
          Confirm order
        </Button>
      </Form.Group>
    </Form>
  )
}

export default SummaryForm
