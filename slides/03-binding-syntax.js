import { html, render } from 'https://unpkg.com/lit-html?module';

// Define a template
const myTemplate = ({name, id, value, disabled, onClick}) => html`
        <h1>Hello Lit</h1>
        <p>This is ${name}</p>
        <pre>
        ${`
                <button id=\${id}                //attribute
                        .someProperty=\${value}  //for a property, so no stringification
                        ?required=\${required}   //turns it into a boolean
                        @click=\${onClick}       //adds an event listener
                        >Hit Me Lit!</button> 
        `}
        </pre>
        <button id=${id} 
                .someProperty=${value} 
                ?disabled=${disabled} 
                @click=${onClick}>Hit Me Lit!</button>
        `;

// Render the template to the document
render(myTemplate({
    name: "the template binding syntax",
    id: "some-id",
    value: "this can be any value you set as a property",
    disabled: false,
    onClick: (event) => console.warn('..and then this happened', event)
}), document.querySelector('#first'));
