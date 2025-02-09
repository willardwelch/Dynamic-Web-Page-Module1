

const mouse=document.getElementById("menter");
mouse.addEventListener("mouseenter", setmouseenter);
mouse.addEventListener("mouseleave", setmouseLeave);


const mouse1=document.getElementById("menter1");
mouse1.addEventListener("mouseenter", setmouseenter);
mouse1.addEventListener("mouseleave", setmouseLeave);




function setmouseenter()
{
   let bordercolor="blue";
    
       $("p") 
          .css("color", bordercolor);

         $("p") 
           .css("font-weight", "Bold"); 
             
            
       
}

function setmouseLeave()
{
   let bordercolor="black";
    
       $("p") 
          .css("color", bordercolor); 

        $("p") 
           .css("font-weight", "normal"); 
  
            
       
}