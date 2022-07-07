import '../styles/App.css';
import Header from './Header';
import Game from './Game';
import Score from './Score';

function App() {
  return (
    <div className="main-container">
      <Header />
      <Game />
      <Score />  
    </div>
  );
}

export default App;
