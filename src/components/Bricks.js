import React from 'react';
import { useState } from 'react'

const Bricks = () => {
  const [numberOfBricks, setNumberOfBricks] = useState(9)
  const [numbers, setNumbers] = useState([])
  const [numberValue, setNuberValue] = useState(27)

  const randomNumbers = () => {
    const numbersTable = []
      for (let i=0; i<numberOfBricks; i++) {
        const number = Math.floor(Math.random()*numberValue);
        numbersTable.push(number)
      }
      console.log(numbersTable);
    return setNumbers(numbersTable)
  }
  

  return ( 
    <>
      <button onClick={randomNumbers}>Klik</button>
      <div>{numbers}</div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </>
  );
}
 
export default Bricks;