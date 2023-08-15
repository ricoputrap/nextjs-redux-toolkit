import React from 'react'

interface Props {
  children: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'danger' | 'success'
  onClick?: () => void
}

const Button: React.FC<Props> = ({
  children,
  onClick = () => { },
  variant = "primary",
  type = "button",
  size = "medium"
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`
        text-white rounded hover:opacity-75
        ${variant === 'primary' ? 'bg-blue-500' :
          variant === 'danger' ? 'bg-red-500' :
            'bg-green-500'
        }
        ${size === 'small' ? 'text-sm px-2 py-1' :
          size === 'medium' ? 'text-md px-4 py-2' :
            'text-lg'}
      `}
    >
      {children}
    </button>
  )
}

export default Button