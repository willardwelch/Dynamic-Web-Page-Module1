

const getbtn6=document.getElementById("btn6");
getbtn6.addEventListener("click", changeDivColor);

function changeDivColor()
{

  const tutorials = document.querySelectorAll(".tutorial");
  tutorials.forEach((div) => {
  div.style.background = 'yellow';
  div.style.color = "#ff4d4d"
   })
}