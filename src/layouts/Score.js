import React from 'react';
import ScoreContainer from '../components/ScoreContainer';
import '../styles/Score.css';

const Score = (props) => {
  const {buttonContent, randomNumbers, buttonContentChanger} = props;
  return ( 
    <>
      {buttonContent === 'Zaczynamy!' ? <button className='button-start' onClick={buttonContentChanger}>{buttonContent}</button> : <ScoreContainer  randomNumbers={randomNumbers} buttonContent={buttonContent}/>}
    </>
    
   );
}
 
export default Score;