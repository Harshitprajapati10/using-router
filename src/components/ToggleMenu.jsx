import React from 'react'

const ToggleMenu = (props) => {
  return (
    <>
      <div className='bg-blue-800 h-[64px] flex justify-center items-center'>
        <button onClick={() => {props.handlePrevious()}} className='bg-red-500  text-2xl w-[120px] h-[40px] rounded-[9px]'>&#8656;</button>
        <span className='bg-purple-800 w-[60px] h-[40px] flex text-2xl justify-center rounded-[99px] items-center'>{props.currentPage}</span>
        <button onClick={() => {props.handleNext()}} className='bg-red-500  text-2xl rounded-[9px] w-[120px] h-[40px]'>&#x21d2;</button>
      </div>
    </>
  )
}

export default ToggleMenu
