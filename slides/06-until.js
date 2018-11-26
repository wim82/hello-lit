import { html, render } from 'https://unpkg.com/lit-html@0.12.0/lit-html.js';
import { until } from  'https://unpkg.com/lit-html@0.12.0/directives/until.js';

const somethingHappens = () => new Promise((resolve) => setTimeout(() => resolve('an incredible update'), 4000));

render(html`
        <h3>until() directive</h3>
        ${until(somethingHappens()
                .then(something => html`${something} happened!`),
                html`<span>loading ...</span>`)
        }
      `, document.querySelector('#first'));
