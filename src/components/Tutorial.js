import React from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { IoMdPaper } from 'react-icons/io'
import { BiSupport } from 'react-icons/bi'

function Tutorial() {
    return (
        <div className = 'tutorial'>
        <div className = 'firstuorial'>
            <a href = '#'><AiOutlineQuestionCircle />
            <br />
            <h4>How Zoomcar Works?</h4>
            </a>
        </div>
        <div className = 'firstuorial'>
            <a href = '#'><IoMdPaper />
            <br />
            <h4>How Zoomcar Works?</h4>
            </a>
        </div>
        <div className = 'firstuorial'>
            <a href = '#'><BiSupport />
            <br />
            <h4>How Zoomcar Works?</h4>
            </a>
        </div>
        </div>
    )
}

export default Tutorial
