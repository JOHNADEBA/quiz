import React from 'react'
import { useGlobalContext } from '../services/context'

const Results = () => {
    const {percent, replay} = useGlobalContext()
  return (
    <div className='results-cont'>
        <h3 className="question">Congrats!</h3>
        <p className="total">You answered {percent}% of questions correctly</p>
        <button onClick={replay} className="nextbtn extra-result-btn">Play Again</button>
    </div>
  )
}

export default Results