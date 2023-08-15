import Link from 'next/link'
import React from 'react'
import Button from './Button'

const ButtonAddUser: React.FC = () => {
  const handleClick = () => {
    console.log('Add User')
  }

  return (
    <Link href="/add-user">
      <Button variant="success" onClick={handleClick}>
        Add User
      </Button>
    </Link>
  )
}

export default ButtonAddUser