import { html, render } from 'https://unpkg.com/lit-html@0.12.0/lit-html.js';
import { ifDefined } from 'https://unpkg.com/lit-html@0.12.0/directives/if-defined.js'
import { when } from 'https://unpkg.com/lit-html@0.12.0/directives/when.js'
// fun fact: when is removed for version 1.0 of lit, so better use a ternary

// Define a template
const myTemplate = ({ name, someClass }) => html`
    <style>
    .bling {color: cornflowerblue;}
    </style>
    
    <h3>when() and ifDefined() directives</h3>    
        ${when(someClass === undefined, 
                () => html`oh no, im not defined`,
                () => html`ow yeah, im defined`)}
    <div>
        <button ?disabled=${ ifDefined(someClass)} class=${ifDefined(someClass)}>This is ${name}</button>
        <button ?disabled=${ someClass} class=${someClass}>This is without ${name}</button>
    </div>
        `;

// Render the template to the document
render(myTemplate({
    name: "the ifDefined directive",
    //someClass: undefined
    someClass: "bling"
}), document.querySelector('#first'));


//Helper to display the innerHTML in the body rather than inspecting element to view source.
render(html`<h4>Dom looks like</h4><pre>${
    document.querySelector('#first').innerHTML
    }</pre>`, document.querySelector('#second'))