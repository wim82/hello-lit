import { html, render } from 'https://unpkg.com/lit-html@0.12.0/lit-html.js';

// Define a template
const myTemplate = ({ name, id, value, disabled, onClick }) => html`
        <h3>Lit-html binding syntax</h3>
        <p>This is ${name}</p>
        <pre>
                ${`
                        <button id=\${id}                //no special syntax to bind to attribute
                                .someProperty=\${value}  //. binding syntax for a property, so no stringification
                                ?required=\${required}   //for booleans, checks truthy-ness
                                @click=\${onClick}>       //adds an event listener
                        Hit Me Lit 🔨 🔨 🔨
                        </button> 
                `}
                </pre>
        <button id=${id} .someProperty=${value} ?disabled=${disabled} @click=${onClick}>Hit Me Lit 🔨 🔨 🔨</button>
        `;

render(myTemplate({
        name: "the template binding syntax",
        id: "some-id",
        value: "this can be any value you set as a property",
        disabled: false,
        onClick: (event) => document.querySelector('#second').innerHTML += `<pre>clicked: ${JSON.stringify(event, null, 2)} </pre>`
}), document.querySelector('#first'));
