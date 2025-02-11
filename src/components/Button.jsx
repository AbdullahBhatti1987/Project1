import React from 'react'

function Button({text, className, onClick}) {
  return (
    <button onClick={onClick} className={`w-1/1 lg:h-10 md:h-8 h-6 text-nowrap lg:text-lg md:text-md text-sm shodow-md shadow-lg border border-gray-600/25 bg-gray-200 focus:bg-gray-300 lg:rounded-lg rounded-md hover:shadow-sm focus:shadow-xs ${className} `}>{text}</button>
  )
}

export default Button