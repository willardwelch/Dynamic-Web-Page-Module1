const pcolor=document.getElementById("querryex");
pcolor.addEventListener("mousemouseover", setPColor);


const pcolor1=document.getElementById("ajax");
pcolor1.addEventListener("mousemouseover", setPColor1);



function setPColor()
{
                
       document.getElementById("querryex").color="red"  ;  
       
}
function setPColor1()
{
                
       document.getElementById("ajax").color="red"  ;  
       
}