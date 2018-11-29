import { html, render } from 'https://unpkg.com/lit-html@0.12.0/lit-html.js';
import { guard } from  'https://unpkg.com/lit-html@0.12.0/directives/guard.js';


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

const randomTemperature = () =>  Math.floor(Math.random() * 60) - 20;

setInterval(() => {
//change root reference, this will pass a guard
//(semi)immutable pattern
/*
weatherStats = weatherStats.map((item) => ({
  location: item.location,
  temperature: randomTemperature()
}))
*/

//vs change value inside the array, which will not pass the guard
//mutable pattern
weatherStats.forEach(item => item.temperature = randomTemperature())


  render(template(weatherStats), document.querySelector('#first'));
}, 1000);

const template = (weather) => html`
<h3>guard() directive</h3>
  <div>
    <h5>guarded</h5>
    ${guard(weather, () => weather.map(item => {
      return html`<div>☔️ ${item.location}: ${item.temperature}</div>`}))}
  </div>
  <hr>
  <div>
    <h5>unguarded</h5>
    ${weather.map(item => html`<div>🌧 ${item.location}: ${item.temperature}</div>`)}
  </div>
  `

render(template(weatherStats), document.querySelector('#first'));

