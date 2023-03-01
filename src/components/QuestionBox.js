import React, {useState , useEffect} from 'react'
import questions from '../questions'
import '../components/QuestionBox.css'
import Result from './Result';


export default function QuestionBox() {
  const [statequestion, setStatequestion] = useState(0);
  const [stateScore, setScore] = useState(0);
  const [screenColor, setscreenColor] = useState(false);


  const change = () => {
     setscreenColor((screenColor) => !screenColor);        //creating a function for light and dark mode
  };

   const reset = () => {       // creating a funtion for restart
    setScore(0);
    setStatequestion(0);
  };
  

  const moveNextQuestion = (isCorrect) => {   //creating a function for changing the questions
    if (isCorrect) {
      setScore(stateScore + 1);
    }
    setStatequestion(statequestion + 1);
    
  };
  useEffect(() => {
    console.log(stateScore);                 //useEffect is used here so that the delay not occurs
  }, [stateScore]);
  

  useEffect(() => {
    const body = document.querySelector('body'); 

    if (screenColor) {                                  // condition for lightmode and darkmode
      body.style.backgroundColor = '#fff' ;
      body.style.color = 'white';
    } else {
      body.style.backgroundColor = '#000000' ;
      body.style.color = 'black'
    }
  }, [screenColor]);
  
  return (
   
    <div id='main-div'> 
       {statequestion < 5 ?  (
      <div className='question-modal'>
      <div className='nav-bar'>
        <span >Kalvium</span>
        { <button className='dark-mode-btn' onClick={change}>{screenColor ? 'LIGHT' : 'DARK'} </button>        /* lightmode and darkmode button */ }
      </div>
      <div id='title'>QUIZZES!</div>
      <div className='question-box'>
          { <h4>Question:{statequestion+1} out of 5</h4>                                     /* Updating the question number */ }
          {<h3 id='question'>{questions[statequestion].text} </h3>                            /*getting question */ }
          <div id='option-div' >
            {questions[statequestion].options.map((el ,index) => (                            
                                                                                              // creating buttons and getting options according to the number of given options through map method
            <button  key={index} onClick ={() => moveNextQuestion(el.isCorrect)}>{el.text}</button>
            ))}
          </div>
          <div className='highlight-btn'>                                         
          <button id='hightlight-btn'onClick={() => {
               const element = document.getElementById("question");                // onclick highlight-btn the question highlights to red
              element.style.color = "#e64747";
          }}>Highlight</button>
          <button id='remove-highlight'onClick={() => {                            // onclick highlight-btn the question highlights to red
              const element = document.getElementById("question");
              element.style.color = "#000000"}}>Remove highlight</button>         
          </div> 
      </div>
      </div>
   
     ):(<Result stateScore = {stateScore} reset = {reset}/>)}                      
    </div> )                                                                          // seting stateScore and reset with props so that it can be used in result page
            
}
