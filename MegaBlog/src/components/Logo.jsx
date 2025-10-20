import React from 'react'

const Logo = ({width='100px'}) => {
  return (
    <img 
      src="../public/Logo-modified.png" 
      alt="Logo" 
      style={{ width: width }} 
    />
  )
}

export default Logo