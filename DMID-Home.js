/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

const toggleDropdownNav = () => {
    document.getElementById("main-nav-content").classList.toggle("show");
}

// function toggleDropdown() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.nav-button')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// window.onscroll = function() {
//   stickyNav()
// };

// const mainNav = document.getElementById("main-nav");

// const sticky = mainNav.offsetTop;

// function stickyNav(){
//   if (window.pageYOffset >= sticky){
//     mainNav.classList.add("sticky");
//     document.getElementById("main-nav").style.display = "fixed";
//   } else {
//     mainNav.classList.remove("sticky");
//   }
// }

//css sees that a button was clicked

//css gives it a style using a pseudo-class

//html tells JS that a button was clicked

//JS asks CSS what that's supposed to look like. 

//CSS gives JS the dropdown

//JS tells CSS to go ahead and implement that style

//JS knows that the button is showing the clicked state

//JS knows that the button was clicked while in the clicked state

//JS asks CSS what it's supposed to look like when the button isn't clicked

//CSS tells JS

//JS tells CSS to go ahead and look like that.





// content dropdown
/*
const toggleDropdownContent = (classID) => {
   document.getElementById(classID).classList.toggle("show-content");
}

toggleDropdownContent(".about-me")*/

/*
function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// // Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
   if (!event.target.matches('.content-button')) {
     let dropdowns = document.getElementsByClassName("content");
     let i;
     for (i = 0; i < dropdowns.length; i++) {
       let openDropdown = dropdowns[i];
       if (openDropdown.classList.contains('show-content')) {
         openDropdown.classList.remove('show-content');
       }
     }
   }
}*/