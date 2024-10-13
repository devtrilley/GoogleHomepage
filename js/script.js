// - - -  Algorithim Logic - - -
/*
  - Grab both the searchbar and search button from HTML to Javascript
  - When we click on the search button, we make a variable called googleUrl that will hold our google link text
    - Grab input.value and store it in a variable so we have the query saved
    - we will use interpolation to add the query variable where it's needed
    - then change the window
    - if nothing is typed in, ensure nothing happens
  - Now do the same thing for when we hit the enter key
*/

// Grabbing HTML elements into JavaScript
const searchBar = document.querySelector(".search-bar");
const searchButton = document.querySelector(".search-btn");

// - - -  Alert() Search Query Implementation (Here to show my first code before I upgraded to the Google Search) - - -
// searchButton.addEventListener("click", () => {
//   const searchQuery = searchBar.value;

//   if (searchQuery !== '') {
//     alert(`You searched for: ${searchQuery}.`);
//   } else {
//     alert('Please enter a search query');
//   }
// });

// searchButton.addEventListener("click", () => {
//   if (searchBar.value !== '') {
//     alert(searchBar.value);
//   }
// });

// - - -  Google Search Implementation (Current and active search implementation, both clickdown and keydown events)  - - -
// Note: To return to project, you will have to click the back button on your browser window to return because I didn't want to implement target blank here.

// Search button click event listener
searchButton.addEventListener("click", () => {
  let searchQuery = searchBar.value;
  let googleUrl = `https://www.google.com/search?q=${searchQuery}`;

  if (!searchQuery) {
    alert("Please enter a search query to start your Google Search!");
  } else {
    window.location.href = googleUrl;
  }
});

// Onkeydown event listener
searchBar.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    let searchQuery = searchBar.value;
    let googleUrl = `https://www.google.com/search?q=${searchQuery}`;

    if (!searchQuery) {
      alert("Please enter a search query to start your Google Search.");
    } else {
      window.location.href = googleUrl;
    }
  }
});
