import React from "react";

const AccessoriesItem = () => {
  return (
    <label>
      Accessories:
      <select name="accessory">
        <option value="0" id="none">Pick an accessory - $0</option>
        <option value="79.99" id="switch2ProController">Nintendo Switch 2 Pro Controller - $79.99</option>
        <option value="89.99" id="joycon2controllers">Left and Right Joy-Con 2 Controllers - $89.99</option>
        <option value="34.99" id="joycon2ChargingGrip">Joy-Con 2 Charging Grip - $34.99</option>
        <option value="12.99" id="">Joy-Con 2 Strap - $12.99</option>
        <option value="19.99" id="">Joy-Con 2 Wheel (set of two) - $19.99</option>
        <option value="49.99" id="">Nintendo Switch 2 Camera - $49.99</option>
        <option value="109.99" id="">Nintendo Switch 2 Dock Set - $109.99</option>
        <option value="34.99" id="">Nintendo Switch 2 Carrying Case & Screen Protector - $34.99</option>
        <option value="79.99" id="">Nintendo Switch 2 All-In-One Carrying Case - $79.99</option>
        <option value="29.99" id="">Nintendo Switch 2 AC Adapter - $29.99</option>
      </select>
    </label>
  )
}

export default AccessoriesItem;