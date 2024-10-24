//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDom from "react-dom";

const time = new Date().getHours();

let greeting;

const myStyle = {
  color: "",
};

if (time > 12 && time < 18) {
  greeting = "Good Afternoon";
  myStyle.color = "green";
} else if (time >= 18 && time < 24) {
  greeting = "Good evening";
  myStyle.color = "blue";
} else {
  greeting = "Good morning";
  myStyle.color = "red";
}

ReactDom.render(
  <h1 style={{ color: myStyle.color }}>{greeting}</h1>,
  document.querySelector("#root")
);
