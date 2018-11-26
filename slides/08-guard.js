import { html, render } from 'https://unpkg.com/lit-html@0.12.0/lit-html.js';
import { guard } from  'https://unpkg.com/lit-html@0.12.0/directives/guard.js';

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

title += 'a';

//change root reference
/*
weatherStats = weatherStats.map((item) => ({
  location: item.location,
  temperature: Math.random()
}))*/

//vs change value
weatherStats[0].location += "a";


  render(template(weatherStats, title), document.querySelector('#first'));
}, 1000);

const template = (ws) => html`
  <div>
    <h5>guarded</h5>
    ${guard(ws, () => ws.map(item => {
      return html`<li>${item.location} - ${item.temperature}`}))}
  </div>
  <hr>
  <div>
    <h5>unguarded</h5>
    ${ws.map(item => html`<li>${item.location} - ${item.temperature}`)}
  </div>
  `



// let template = (tit, ws) => html`
// <h1>${tit}</h1>
// ${ws.map(
//  (stat) => 
//   stat.temperature > 20 ? hot() : cold()
// )}
// `;


render(template(weatherStats, title), document.querySelector('#first'));

