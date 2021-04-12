/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// Creating the Navigation Bar
let list = document.getElementById("nav__list");
let  listItem1 = document.createElement("li");
let  listItem2 = document.createElement("li");
let  listItem3 = document.createElement("li");


let linkItem1 = document.createElement("a");
linkItem1.setAttribute("href", "#section1");
linkItem1.textContent="first";

document.querySelector("ul").appendChild(listItem1);
listItem1.appendChild(linkItem1);

let linkItem2 = document.createElement("a");
linkItem2.setAttribute("href", "#section2");
linkItem2.textContent="second";

document.querySelector("ul").appendChild(listItem2);
listItem2.appendChild(linkItem2);

let linkItem3 = document.createElement("a");
linkItem3.setAttribute("href", "#section3");
linkItem3.textContent="third";

document.querySelector("ul").appendChild(listItem3);
listItem3.appendChild(linkItem3);

// This selects all of the sections in HTML, and puts them in a NodeList (which is not an array!).
let sectionElements = document.querySelectorAll("section")
// Convert NodeList to real array - https://developer.mozilla.org/en-US/docs/Web/API/NodeList
let sections = Array.from(sectionElements);
for( section of sections){
  console.log(section.dataset.nav)
// TODO: console.log out the dataset.nav property
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


