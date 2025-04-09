import React from 'react';

const GameItem = () => {
  return (
    <label>
      Game:
      <select name="game">
        <option value="0" id="none">Pick a game - $0</option>
        <option value="79.99" id="marioKart">Mario Kart World - $79.99</option>
        <option value="69.99" id="donkeykong">Donkey Kong Bananza - $69.99</option>
        <option value="59.99" id="other59.99">Other Game - $59.99</option>
        <option value="69.99" id="other69.99">Other Game - $69.99</option>
      </select>
    </label>
  );
};

export default GameItem;