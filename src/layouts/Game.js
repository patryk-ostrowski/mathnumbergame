import React from 'react';
import '../styles/Game.css';
import Bricks from '../components/Bricks';

const Game = () => {
  return ( 
    <main className='container-bricks'>
      <Bricks/>
    </main>
   );
}
 
export default Game;