import { html, render } from 'https://unpkg.com/lit-html@0.12.0/lit-html.js';
import { asyncReplace } from 'https://unpkg.com/lit-html@0.12.0/directives/async-replace.js';
import { asyncAppend } from 'https://unpkg.com/lit-html@0.12.0/directives/async-append.js';


const wait = (timeToWait) => new Promise((resolve) => setTimeout(resolve, timeToWait));

/**
 * Returns an async iterable that yields increasing integers.
 */
async function* countUp() {
  let ms = 1;
  while (true) {
    yield ms++;
    await wait(ms);
  }
}

render(html`
  Milliseconds running: <span style="color:#FF6600">${asyncReplace(countUp())}</span>.
  All The Miliseconds in a row: <span style="word-break:break-all;">${asyncAppend(countUp())} </span>.
`, document.querySelector('#first'));
