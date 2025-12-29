// Challenge 1
// Add click eventListener to the button. Alert `It is 18 degrees`
let buttonAlert = document.querySelector("#button");
buttonAlert.addEventListener("click", function (event) {
  alert("It is 18 degrees");
});

// Challenge 2
// When the button is clicked, replace button label by ‘18 degrees’
let buttonChange = document.querySelector("button");
button.addEventListener("click", function (event) {
  event.target.innerHTML = "18 degrees";
});
