import React from 'react'

interface Props {
  children: React.ReactNode
  variant?: 'primary' | 'danger' | 'success'
  onClick: () => void
}

const Button: React.FC<Props> = ({ children, onClick, variant = "primary" }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-2 py-1 text-white rounded hover:opacity-75
        ${variant === 'primary' ? 'bg-blue-500' :
          variant === 'danger' ? 'bg-red-500' :
            'bg-green-500'
        }
      `}
    >
      {children}
    </button>
  )
}

export default Button