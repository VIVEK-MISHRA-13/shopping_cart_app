import React from 'react'


const Spinner = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='loader'></div>
        <div>
            Loading
        </div>
    </div>
  )
}

export default Spinner