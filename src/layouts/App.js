import '../styles/App.css';
import Header from './Header';
import Game from './Game';
import {useState} from 'react';

function App() {
  const [buttonContent, setButtonContent] = useState('Zaczynamy!')

  const buttonContentChanger = () => (setButtonContent('Sprawdź'));

  return (
    <div className="main-container">
      <Header buttonContent={buttonContent}/>
      <Game buttonContent={buttonContent} buttonContentChanger={buttonContentChanger}/>
    </div>
  );
}

export default App;
