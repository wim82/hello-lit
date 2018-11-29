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


//COPY PASTE THE CODE DURING DEMO WIM! DO NO FORGET!