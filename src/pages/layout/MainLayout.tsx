import React from 'react'

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='flex w-full px-20 py-20'>
      {children}
    </div>
  )
}

export default MainLayout