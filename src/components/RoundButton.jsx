import React from 'react'

function RoundButton({text, className, onClick, disabled}) {
  return (
    <button onClick={onClick} disabled={disabled} className={`flex justify-center items-center border bg-gray-300 shadow-md md:w-12 md:h-12 w-8 h-8 text-center place-content-center text-nowrap opacity-50 rounded-full md:text-2xl text-xl z-10 border-gray-400/25 active/:bg-gray-600 hover:shadow-md cursor-pointer ${className} transition-all duration-300 ease-out `}>{text}</button>
  )
}

export default RoundButton