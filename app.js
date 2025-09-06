// This function will dynamically set or initialize the text when the parent detail element is not open
const initializeText = (element) => {
 let parentElement = element.parentElement;
 parentElement = !parentElement;
 element.innerHTML = parentElement.open ? 'Show less' : 'Show more';
};

// Retrieves all the summary elements with the class name of "title__accordian"
let summaryElements = document.getElementsByClassName('title__accordian');
// Loops through the summary elements and calls the initializeText method on line 1
Array.from(summaryElements).forEach((element) => {
 initializeText(element);
});

const toggleText = ({ target }) => {
 // Target is the clicked summary element and swtiches "Show More" to "Show less" or vice versa
 target.innerHTML = target.innerHTML === 'Show more' ? 'Show less' : 'Show more';
};
