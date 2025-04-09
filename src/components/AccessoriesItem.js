import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';

const AccessoriesItem = ({ onChange, value }) => {
  return (
    <FormControl fullWidth variant="outlined" sx={{ mb: 1 }}>
      <InputLabel id="accessory-select-label">Accessory</InputLabel>
      <Select
        labelId="accessory-select-label"
        id="accessory-select"
        label="Accessory"
        value={value}
        onChange={onChange}
      >
        <MenuItem value="none">Pick an accessory - $0</MenuItem>
        <MenuItem value="pro-controller">Nintendo Switch 2 Pro Controller - $79.99</MenuItem>
        <MenuItem value="joy-con">Left and Right Joy-Con 2 Controllers - $89.99</MenuItem>
        <MenuItem value="charging-grip">Joy-Con 2 Charging Grip - $34.99</MenuItem>
        <MenuItem value="strap">Joy-Con 2 Strap - $12.99</MenuItem>
        <MenuItem value="wheel">Joy-Con 2 Wheel (set of two) - $19.99</MenuItem>
        <MenuItem value="camera">Nintendo Switch 2 Camera - $49.99</MenuItem>
        <MenuItem value="dock">Nintendo Switch 2 Dock Set - $109.99</MenuItem>
        <MenuItem value="case">Nintendo Switch 2 Carrying Case & Screen Protector - $34.99</MenuItem>
        <MenuItem value="all-in-case">Nintendo Switch 2 All-In-One Carrying Case - $79.99</MenuItem>
        <MenuItem value="adapter">Nintendo Switch 2 AC Adapter - $29.99</MenuItem>
      </Select>
      <FormHelperText>Select your accessory</FormHelperText>
    </FormControl>
  );
};

export default AccessoriesItem;
