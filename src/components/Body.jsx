import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import AnsButton from './AnsButton';

const Body = (props) => {
    return (
        <>
        <div className="absolute min-h-[100%] inset-0 -z-10 w-full items-center px-5 py-24 bg-black flex flex-col">
            {props.paper.map((question, index) => {
                return <div key={uuidv4} className='box-border border-3 border-blue-500 rounded-[22px] w-[95%] flex flex-col justify-center items-center my-[11px]'>
                            <h2 className='text-white my-3 w-[95%] text-2xl font-poppins' >{`Q${index + 1}) ${question.ques}`}</h2>
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