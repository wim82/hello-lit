//LOOK MOM NO IMPORTS!

/*********************
 * WHAT DOES LIT DO?
 * - render()
 * - html()
 * - the magic of tagged template literals
*********************/


// render in lit is just a fancy way of adding nodes to the dom effectively based on templates, rather than a virtual dom.
const render = (what, where) => {
    where.innerHTML = what;
    // extremely silly implementation of the render function
    // but basically render() is just rendering some html templates to the dom
};

// the lit html function returns nodes, in this case, i just highlight the params
// the most important thing here is that html is function that takes an array of strings and values spread out as parameters.
const html = 
    (strings, ...values) => strings.reduce(
    (template, string, i) => (template += string + '<span style="color:#FF6600">' + (values[i] || '') + '</span>'), '');


/*********************************************
 * Code below is identical to 01-lit-html.js
 *********************************************/


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



/*************
 *  UPDATE
**************/

//update it to show the dynamic changes
setTimeout(() => {
    render(myTemplate('an update after 4 seconds.'), document.querySelector('#first'));
}, 4000);



/*****************************************
 * FANCY STUFF IN THE TEMPLATE PARAMETERS
 *****************************************/

//we can also do very fancy stuff
const complainCase = (word) => `${(word === 'friday' ? 'yaay' : 'pffff')}, it is ${word} again`;

const daysTemplate = (days) => html`<ul>
    <!-- start of an IIFE in a template -->
    ${(
        //start of an IIFE in a template
            () => {
                console.log('i can console.log from a template and basically do anything i want.');
                return days.map((day) => html`<li> ${complainCase(day)}`)
            })()}`;

render(daysTemplate(['monday', 'tuesday', 'wednesday', 'thursday', 'friday']), document.querySelector('#second'));


