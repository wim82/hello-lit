//LOOK MOM NO IMPORTS!

//render in lit is just a fancy way of adding nodes to the dom effectively
const render = (what, where) => {
    console.log('ow yeah');
    where.innerHTML = what;
    //innerHTML is killing the purpose of lit html of course :)
};

//html returns nodes, in this case, i just highlight the params
const html = (strings, ...values) => strings.reduce((template, string, i) => (template += string + '<b>' + (values[i] || '') + '</b>'), '');


//this code is identical to 01-lit-html.js
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



