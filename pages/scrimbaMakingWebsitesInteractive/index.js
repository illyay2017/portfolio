let myButton = document.getElementById("btn");
var myTitle = document.getElementById("title");
var counter = 5;

myButton.addEventListener("click", function(e){
  console.log(e);
  counter += 5;
  myButton.classList.toggle('inverted');
  myButton.textContent = counter
});
