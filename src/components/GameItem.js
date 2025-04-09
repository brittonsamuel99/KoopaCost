import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';

const GameItem = ({ onChange, value }) => {
  return (
    <FormControl fullWidth variant="outlined" sx={{ mb: 1 }}>
      <InputLabel id="game-select-label">Game</InputLabel>
      <Select
        labelId="game-select-label"
        id="game-select"
        label="Game"
        value={value}
        onChange={onChange}
      >
        <MenuItem value="none">Pick a game - $0</MenuItem>
        <MenuItem value="mario-kart">Mario Kart World - $79.99</MenuItem>
        <MenuItem value="donkey-kong">Donkey Kong Bananza - $69.99</MenuItem>
        <MenuItem value="other-game-59">Other Game - $59.99</MenuItem>
        <MenuItem value="other-game-69">Other Game - $69.99</MenuItem>
      </Select>
      <FormHelperText>Select your game</FormHelperText>
    </FormControl>
  );
};

export default GameItem;
