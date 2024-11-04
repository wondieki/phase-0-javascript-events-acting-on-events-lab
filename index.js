// Your code here
// I changed the value to 5 to increase the speed of the dodger.
const dodger=document.getElementById("dodger")
dodger.style.backgroundColor="red"
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
      moveDodgerRight();
    } else if (event.key === "ArrowUp") {
      moveDodgerUp();
    } else if (event.key === "ArrowDown") {
      moveDodgerDown();
    }
  });
  
  function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  if (left>0){dodger.style.left = `${left - 5}px`;}
    
  }
  //this is based on the dimensions of the box
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left < 360) {
      dodger.style.left = `${left + 5}px`;
    }
  }
  
  function moveDodgerUp() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);
    if (bottom < 380) {
      dodger.style.bottom = `${bottom + 5}px`;
    }
  }
  
  function moveDodgerDown() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);
    if (bottom > 0) {
      dodger.style.bottom = `${bottom - 5}px`;
    }
  }