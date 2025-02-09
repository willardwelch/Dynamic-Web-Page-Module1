
const getbtn3=document.getElementById("btn3");
getbtn3.addEventListener("click", setEffect);

function setEffect()
{
   let bordercolor=document.getElementById("txtColor").value;
   if(bordercolor=="")
    {
        alert ("Please enter a color");
        document.getElementById("txtColor").focus();
         return;
   }
     
        $("textarea") 
          .css("border", "2px solid "+bordercolor); 

         $("p") 
            .css("border", "2px solid  "+bordercolor); 
         
}
