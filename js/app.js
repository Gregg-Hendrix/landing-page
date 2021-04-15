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
// let list = document.getElementById("nav__list");
// let  listItem1 = document.createElement("li");
// let  listItem2 = document.createElement("li");
// let  listItem3 = document.createElement("li");


// let linkItem1 = document.createElement("a");
// linkItem1.setAttribute("href", "#section1");
// linkItem1.textContent="first";

// document.querySelector("ul").appendChild(listItem1);
// listItem1.appendChild(linkItem1);

// let linkItem2 = document.createElement("a");
// linkItem2.setAttribute("href", "#section2");
// linkItem2.textContent="second";

// document.querySelector("ul").appendChild(listItem2);
// listItem2.appendChild(linkItem2);

// let linkItem3 = document.createElement("a");
// linkItem3.setAttribute("href", "#section3");
// linkItem3.textContent="third";

// document.querySelector("ul").appendChild(listItem3);
// listItem3.appendChild(linkItem3);

// This selects all of the sections in HTML, and puts them in a NodeList (which is not an array!).
let sectionElements = document.querySelectorAll("section");
// Convert NodeList to real array - https://developer.mozilla.org/en-US/docs/Web/API/NodeList
let sections = Array.from(sectionElements);
for (const section of sections){
  
  //  Get nav__list
  let list = document.getElementById("navbar__list");
  //  Create Anchor Link + attach the Href to section
  let linkItem = document.createElement("a");
  linkItem.setAttribute("href", "#" + section.id);
  linkItem.textContent = section.dataset.nav
  //  Create list item, generic name for loop
  let listItem = document.createElement("li");
  //  Appending the Anchor link + Href, to the list item
  list.appendChild(listItem);
  listItem.appendChild(linkItem);
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport
// let linkSelector = document.querySelectorAll(".active");
// function activeViewport (){
// let sections = document.querySelectorAll("section");
let indexLength = sectionElements.length;

function activeViewport(){
  for(let section of sections){ 
    const item = section.getBoundingClientRect();
    const activeElement = document.getElementById(section.id);
    if (item.y <= 90 && item.bottom >=150){
      section.classList.add("active");
      console.log("inside if statement");
    }
    else {
      section.classList.remove("active");
  }
    console.log("inside for loop");
  }
}

document.addEventListener('scroll', activeViewport);
  // document.addEventListener('scroll', makeActive);

//   while(-- indexLength && window.scrollY + 50 < sectionElements[indexLength].offsetTop){

//   }
//   linkSelector.forEach( (link) => link.classList.remove("active"));
//   linkSelector[indexLength].classList.add("active");
// }
// activeViewport();
// window.addEventListener("scroll", activeViewport);

// If sectionElements = (is in) visualViewport
// add class active

// else 
// remove class active



// Scroll to anchor ID using scrollTO event
// I'm using css for this, because its better


/**
 * End Main Functions
 * Begin Events
 * 
*/
window.addEventListener("scroll", function(){

  // get the class of all of the sections

  // remove class from non-active sections (not in viewport)

  // Set active class to section in viewport

  // create a function to loop through sections, to find active class.
});
// Build menu 

// Scroll to section on link click

// Set sections as active


