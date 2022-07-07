import React from 'react';
import '../styles/Bricks.css';

const Bricks = (props) => {
  const {classNameToBlocks, buttonClicker, buttonContent, numbersToButtons} = props;
  return ( 
    <>
      {numbersToButtons.map((item, index) => <button key={index} className={buttonContent === "Zaczynamy!" ? 'table__game-buttons-hidden' : classNameToBlocks} onClick={buttonClicker}>{item}</button>)}
    </>
  );
}
 
export default Bricks;