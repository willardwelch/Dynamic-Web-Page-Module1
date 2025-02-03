function changeDivColor()
{

  const tutorials = document.querySelectorAll(".tutorial");
  tutorials.forEach((div) => {
  div.style.background = 'yellow';
  div.style.color = "#ff4d4d"
   })
}