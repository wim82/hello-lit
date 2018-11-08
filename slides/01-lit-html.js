import { html, render } from '../node_modules/lit-html/lit-html.js'; //imported via path if you don't use build tool


/*****************
 * 1. Basic Usage  
 *****************/

// Define a template
const myTemplate = (name) => html`
        <h1>Hello Lit</h1>
        <p>This is ${name}</p>
        <em>I am a footer</em>
        `;

// Render the template to the document
render(myTemplate('quite awesome'), document.querySelector('#first'));
//render(myTemplate('<span style="color:red;">🔥🔥🔥 lit 🔥🔥🔥</span>'), document.querySelector('#first'));

//update it to show the dynamic changes
setTimeout(() => {
    render(myTemplate('an update after 4 seconds.'), document.querySelector('#first'));
}, 4000);



//we can also do very fancy stuff
const complainCase = (word) => (word === 'friday' ? 'yaay' : 'pffff') + ', it is ' + word + ' again';

const daysTemplate = (days) => html`<ul>
    <!-- start of an IIFE in a template -->
    ${(
        //start of an IIFE in a template
            () => {
                console.log('i can console.log from a template and basically do anything i want.');
                return days.map((day) => html`<li> ${complainCase(day)}`)
            })()}`;

render(daysTemplate(['monday', 'tuesday', 'wednesday', 'thursday', 'friday']), document.querySelector('#second'));



/** Template Guidelines
 * 
 * Templates must be well-formed when all expressions are replaced by empty values.
 * Expressions can only occur in attribute-value and text-content positions.
 * Expressions cannot appear where tag or attribute names would appear.
 * Templates can have multiple top-level elements and text.
 * Templates should not contain unclosed elements - they will be closed by the HTML parser.
 * 
 */
