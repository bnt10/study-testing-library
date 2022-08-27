import {useState} from 'react'
import {Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
function SummaryForm() {
  const [checkboxChecked, setCheckboxChecked] = useState(false)
  const checkboxLabel = (
    <span>
      I agree to <span style={{color: 'blue'}}>Terms and Conditions</span>
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
