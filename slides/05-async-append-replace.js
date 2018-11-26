import { html, render } from 'https://unpkg.com/lit-html@0.12.0/lit-html.js';
import { asyncReplace } from 'https://unpkg.com/lit-html@0.12.0/directives/async-replace.js';
import { asyncAppend } from 'https://unpkg.com/lit-html@0.12.0/directives/async-append.js';


const wait = (timeToWait) => new Promise((resolve) => setTimeout(resolve, timeToWait));

/**
 * Returns an async iterable that yields increasing integers.
 * Because of the ms++ it will always do it 1ms slower as the time before
 */
async function* countUp() {
  let ms = 1;
  while (true) {
    yield ms++;
    await wait(ms);
  }
}

const template = html`
<h3>Async Replace and Async Append</h3>
<div>Milliseconds running: <span style="color:#FF6600">${asyncReplace(countUp())} ms until next update</span></div>
<div>All The Miliseconds in a row: <span style="word-break:break-all;">${asyncAppend(countUp())} ms</span></div>
`

render(template, document.querySelector('#first'));
