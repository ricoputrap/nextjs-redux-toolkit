import React from 'react'
import Button from './Button'

const ButtonAddUser: React.FC = () => {
  return (
    <Button variant="success" onClick={() => console.log('Add User')}>
      Add User
    </Button>
  )
}

export default ButtonAddUser