import {Alert} from 'react-bootstrap'

export default function AlertBanner({message, variant}) {
  const alertMessage =
    message || 'An unexpected error ocurred. Please try again later.'
  const alertVariant = variant || 'danger'
  return (
    <Alert
      variant={alertVariant}
      message={alertMessage}
      style={{backgroundColor: 'red'}}
    ></Alert>
  )
}
