import { html, render } from 'https://unpkg.com/lit-html@0.12.0/lit-html.js';
import { until } from  'https://unpkg.com/lit-html@0.12.0/directives/until.js';

const somethingHappens = () => new Promise((resolve, reject) => setTimeout(() => resolve('😱😱😱'), 8000));

render(html`
        <h3>until() directive</h3>
        ${until(somethingHappens()
                        .then(something => html`<span style="font-size:144px">${something}</span>`)
                        .catch(() => html`<span>too bad.. promise failed.</span>` ),
                html`<span>loading ... tension rises ...</span>`)
        }
      `, document.querySelector('#first'));
