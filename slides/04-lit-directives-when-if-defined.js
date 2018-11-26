import { html, render } from 'https://unpkg.com/lit-html@0.12.0/lit-html.js';
import { ifDefined } from 'https://unpkg.com/lit-html@0.12.0/directives/if-defined.js'
import { when } from 'https://unpkg.com/lit-html@0.12.0/directives/when.js'

// Define a template
const myTemplate = ({ name, someClass }) => html`
    <style>
    .bling {
        color: cornflowerblue;
    }

    </style>
        <h1>Hello Lit</h1>
        
        ${when(typeof someClass === 'undefined',
        () => html`oh no, im not defined`,
        () => html`ow yeah, im defined`)}

        <button ?disabled=${ ifDefined(someClass)} class=${ ifDefined(someClass)}>This is ${name}</button>
<button ?disabled=${ someClass} class=${someClass}>This is without ${name}</button>
        `;

// Render the template to the document
render(myTemplate({
    name: "the ifDefined directive",
     someClass: "" 
    // someClass: "bling"
}), document.querySelector('#first'));

