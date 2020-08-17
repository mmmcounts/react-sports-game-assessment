import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/game/Game';
import renegadesLogo from './assets/images/ralph.jpg';
import outlawsLogo from './assets/images/bob.jpg';
import piratesLogo from './assets/images/michael.jpg';
import buccaneersLogo from './assets/images/tom.jpg'
//need to import more things, look at Davey's App
//need to change what it returns, don't get rid of all of this
//import whichever component/s App uses and also the images go here


function App(props) {
  const renegades = {
    name: 'Renegades',
    logoSrc: renegadesLogo
  }

  const outlaws = {
    name: 'Outlaws',
    logoSrc: outlawsLogo
  }

  const pirates = {
    name: 'Pirates',
    logoSrc: piratesLogo
  }

  const buccaneers = {
    name: 'Buccaneers',
    logoSrc: buccaneersLogo
  }

  return (
    <div className="App">
      <Game
        venue="Ralph Wiggum's Playhouse"
        homeTeam={renegades}
        visitingTeam={outlaws}
      />
      <Game
        venue="Sideshow Bob's Prison Cell"
        homeTeam={outlaws}
        visitingTeam={renegades}
      />
      <Game
        venue="The Lonely Island"
        homeTeam={pirates}
        visitingTeam={buccaneers}
      />
      <Game
        venue="Matt Damon's Basement"
        homeTeam={buccaneers}
        visitingTeam={pirates}
      />
    </div>
  )
}

export default App;
