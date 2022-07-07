import React from 'react';
import '../styles/Game.css';
import Bricks from '../components/Bricks';
import Score from './Score';
import { useState } from 'react';

const Game = (props) => {
  const [numberOfBricks, setNumberOfBricks] = useState(66);
  const [numbersToButtons, setnumbersToButtons] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
  const [playerNumbers, setPlayerNumbers] = useState([]);
  const [round, setRound] = useState(1);
  const [playerSum, setPlayerSum] = useState(0);
  const [numbersMaxValue, setnumbersMaxValue] = useState(150);
  const [classNameToBlocks, setClassNameToBlocks] = useState('table__game-buttons buttons-66')

  const randomNumbers = () => {
    const numbersTable = []
      for (let i=0; i<numberOfBricks; i++) {
        let minusNumber = Math.random();
        if (minusNumber < 0.5) {minusNumber = -1} else {minusNumber = 1}
        const numberToTable = Math.floor(Math.random()*numbersMaxValue * minusNumber);
        numbersTable.push(numberToTable)
      }
    return setnumbersToButtons(numbersTable)
  }

  const buttonClicker = (e) => {
    console.log(e.target.textContent);
    console.log(e.target.disabled='true');
  }


  const {buttonContentChanger, buttonContent} = props;
  return ( 
    <>
      <main className={buttonContent === 'Zaczynamy!' ? 'container-bricks-unloaded' : 'container-bricks-loaded'}>
        <Bricks 
          numbersToButtons={numbersToButtons} 
          buttonClicker={buttonClicker}
          classNameToBlocks={classNameToBlocks}
          buttonContent={buttonContent}    
        />
      </main>
    <Score buttonContent={buttonContent} randomNumbers={randomNumbers} buttonContentChanger={buttonContentChanger}/>
    </>
   );
}
 
export default Game;