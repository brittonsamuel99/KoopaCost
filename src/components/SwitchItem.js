import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';

const SwitchItem = ({ onChange, value }) => {
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel id="switch-model-label">Switch 2 Model</InputLabel>
      <Select
        labelId="switch-model-label"
        id="switch-model"
        label="Switch 2 Model"
        value={value}
        onChange={onChange}
      >
        <MenuItem value="switch-standard">Nintendo Switch 2 - $449.99</MenuItem>
        <MenuItem value="switch-bundle">Nintendo Switch 2 + Mario Kart World - $499.99</MenuItem>
      </Select>
      <FormHelperText>Select your Nintendo Switch 2 model</FormHelperText>
    </FormControl>
  );
};

export default SwitchItem;
