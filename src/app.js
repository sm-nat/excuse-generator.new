/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  console.log("Hello");
};

let generateExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird", "Aliens"];
  let action = ["ate", "peed", "crushed", "broke", "stole"];
  let what = ["my homework", "the keys", "the car", "my computer"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
    "in a parallel universe"
  ];

  let whoindex = Math.floor(Math.random() * who.length);
  let actionindex = Math.floor(Math.random() * action.length);
  let whatindex = Math.floor(Math.random() * what.length);
  let whenindex = Math.floor(Math.random() * when.length);

  return `${who[whoindex]} ${action[actionindex]} ${what[whatindex]} ${when[whenindex]}`;
};
