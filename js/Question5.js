
const getbtn5=document.getElementById("btn5");
getbtn5.addEventListener("click", changeBackGround);

function changeBackGround()
{

  let backcolor=document.getElementById("txtbgColor").value;
  let textColor=document.getElementById("txtfontColor").value;
   if(backcolor=="")
    {
         alert ("Please enter a background color");
         document.getElementById("txtbgColor").focus();
         return;
   }

   document.getElementById("targetparagraph").style.color = textColor;
   document.getElementById("targetparagraph").style.background = backcolor;
   
}