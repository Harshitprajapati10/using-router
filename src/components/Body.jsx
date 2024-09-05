import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import AnsButton from './AnsButton';

const Body = (props) => {
    return (
        <>
        <div className="inset-0 -z-10  items-center px-5 py-24 bg-black flex flex-col">
            {props.paper.map((question, index) => {
                return <div key={uuidv4} className='box-border bg-blue-900 border-2 border-green-500 rounded-[22px] w-[150%] lg:w-[95%] flex flex-col justify-center items-center my-[11px] p-4 min-h-[322px]'>
                            <h2 className='text-green-400 my-3 w-[95%] text-xl lg:text-2xl font-poppins' >{`Q${index + 1}) ${question.ques}`}</h2>
                            <div className='h-[212px] flex flex-col justify-around'>
                                <AnsButton correct = {question.ans} option = "A" ansvalue = {question.A}/>
                                <AnsButton correct = {question.ans} option = "B" ansvalue = {question.B}/>
                                <AnsButton correct = {question.ans} option = "C" ansvalue = {question.C}/>
                                <AnsButton correct = {question.ans} option = "D" ansvalue = {question.D}/>
                            </div>
                        </div>
            })}
            </div>
        </>
    )
}

export default Body