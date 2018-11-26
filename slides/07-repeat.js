import { html, render } from 'https://unpkg.com/lit-html@0.12.0/lit-html.js';
import { repeat } from  'https://unpkg.com/lit-html@0.12.0/directives/repeat.js';

let title = "hola";
let weatherStats = [
  {
    temperature: 10,
    location: 'belgium'
  },
  {
    temperature: 20,
    location: 'spain'
  },
  {
    temperature: 15,
    location: 'cambodja'
  },
  {
    temperature: 9,
    location: 'bolivia'
  },
  {
    temperature: 40,
    location: 'egypt'
  },
  {
    temperature: 10,
    location: 'iceland'
  },

];


setInterval(() => {

  weatherStats = weatherStats.map(stat => 
    ({
      location: stat.location,
      temperature:  Math.floor(Math.random() * 40)+ 1
    })
  );
  render(template(title, weatherStats), document.querySelector('#first'));
}, 1000);

const cold = () => html`<div><h1>IT IS COLD</h1></div>`;

const hot = () => html`<div><h1>IT IS HOT</h1></div>`;

//repeat() takes care of shuffling dom nodes by using an index and storing the dom nodes in a cache

let template = (tit, ws) => html`
<h1>${tit}</h1>
${repeat(
  ws, (i) => i.location, (stat) => 
  stat.temperature > 20 ? hot() : cold()
)}
`;

// let template = (tit, ws) => html`
// <h1>${tit}</h1>
// ${ws.map(
//  (stat) => 
//   stat.temperature > 20 ? hot() : cold()
// )}
// `;


render(template(title, weatherStats), document.querySelector('#first'));



