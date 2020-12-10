/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
/* <h1 id="greeting"></h1> */
function displayMessage(msg){
  document.getElementById("greeting").innerText = msg;
}

function greet(timeStr) {
  const hour = parseInt(timeStr, 10);
  if ( hour < 12) return "Good Morning"
  if ( hour > 17) return "Good Evening"
  if (hour >12 && hour <17) return "Good Afternoon"

  
}

// try {
//   var message;
//   message = document.getElementById("greeting");
//   message.innerHTML = "" ;
//   const hour = parseInt(timeStr, 10);
//   if (hour <0 || hour > 24 )
//   throw "must be between 0-24";
// }
// catch(err) {
//   message.innerText = "Input is " + err;

// }