import React from 'react'

export default function Button({
  type,
  children, 
  disabled, 
  className = '',
  onClick
}) {
  return (
    <button onClick={onClick} type={type} disabled={disabled} className={ 'w-full text-sm rounded-full ' + className}>
        <div className='flex justify-center items-center w-full'>
            <span>
                {children}
            </span>
        </div>
    </button>
  )
}
