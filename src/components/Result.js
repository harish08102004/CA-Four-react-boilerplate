import React from 'react'
import '../components/QuestionBox.css'
import '../components/QuestionBox.js'

export default function Result(props) {
  const result = props.stateScore
  const totalQuestion = 5
  // const restart = document.getElementById('Restart-btn')
  return (
    <div id='main'>
      <div className='question-modal'>
      <div className='nav-bar'>
        <span >Kalvium</span>
        <button className='dark-mode-btn' >LIGHT</button>
      </div>
      <div id='title'>QUIZZES!</div>
    </div>
    {/* resultcard */}
    <div id='resultCard'>
      <h4>Final result</h4>
    <div className='report'>{result} out of {totalQuestion} correct - {(result/totalQuestion)*100}% </div>  
    <button id='Restart-btn' onClick={props.reset}>Restart</button>
    </div>
    </div>
  )
  }
