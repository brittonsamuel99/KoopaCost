import React from "react";

const SwitchItem = () => {
  return (
    <label>
      Pick a Switch 2 model:
      <select name="switch2-model" id="switch2-model">
        <option value={449.99} id="standard">Nintendo Switch 2 - $449.99</option>
        <option value={499.99} id="withMarioKart">Nintendo Switch 2 + Mario Kart World - $499.99</option>
      </select>
    </label>
  )
}

export default SwitchItem;