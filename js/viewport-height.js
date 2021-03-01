import {
  throttle
} from "./main-transition.js";
window.addEventListener('resize', onResize)
console.log('INNER:', window.innerHeight);
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

function onResize() {
  console.log('INNER AFTER:', window.innerHeight);
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
onResize = throttle(onResize, 500);