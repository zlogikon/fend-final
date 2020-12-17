import { postData } from './js/app'
import { formHandler } from './js/app'
import { updateUI } from './js/app'
import { cancel } from './js/app'

import './styles/style.scss'

console.log("Updated!!");

document.addEventListener('DOMContentLoaded', (event) => {
  const genBttn = document.getElementById("generate");
  genBttn.addEventListener("click", formHandler);

  const canBttn = document.getElementById("cancel");
  canBttn.addEventListener("click", cancel);
});