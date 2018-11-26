import { html, render } from 'https://unpkg.com/lit-html@0.12.0/lit-html.js';
import { until } from  'https://unpkg.com/lit-html@0.12.0/directives/until.js';

const somethingHappens = () => new Promise((resolve) => setTimeout(() => resolve('something'), 2000));

render(html`
        ${until(
          somethingHappens().then(something => html`${something} happened!`),
          html`<span>loading ...</span>`)
        }
      `, document.querySelector('#first'));
