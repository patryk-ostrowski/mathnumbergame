import React from 'react';
const ScoreContainer = (props) => {
  const {buttonContent, randomNumbers} = props;
  return ( 
    <button className={buttonContent === 'Zaczynamy!' ? 'button-start' : 'button-check' } onClick={randomNumbers}>{buttonContent}</button> 
  );
}
 
export default ScoreContainer;