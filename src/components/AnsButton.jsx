import React, { useState } from 'react'

const AnsButton = (props) => {
  const [isCorrect, setIsCorrect] = useState(null)

  const verify = () => {
    if (props.option == props.correct) {
      setIsCorrect(true)
    } else {
      setIsCorrect(false)
    }
  }

  return (
    <div 
      onClick={() => { verify() }} 
      className={`w-[1330px] h-[44px] text-[18px] font-poppins border-black-500 border-2 rounded-full 
      ${isCorrect === true ? 'bg-green-500' : isCorrect === false ? 'bg-red-500' : 'bg-slate-400'}`}
    >
      <span className='relative left-[5px] top-[3px]' >({props.option}) </span>
      <span className='relative left-[6px] top-[4px]'>{props.ansvalue}</span>
    </div>
  )
}

export default AnsButton