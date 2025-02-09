const getbtn12=document.getElementById("btn12");
getbtn12.addEventListener("click", removeParagraph);
function removeParagraph()
{
  const element = document.getElementById("demo1");
  element.remove();
   
}