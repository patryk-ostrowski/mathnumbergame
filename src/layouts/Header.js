import React from 'react';
import '../styles/Header.css'

const Header = (props) => {
  return ( 
    <div className={props.buttonContent === "Zaczynamy!" ? 'header' : 'header-hidden'}>
      <p>Zasady gry:</p>
      <p>Należy wybrać liczby, których łączna suma będzie wynosić tyle ile w ramce WYNIK KOŃCOWY.</p>
    </div>
   );
}
 
export default Header;