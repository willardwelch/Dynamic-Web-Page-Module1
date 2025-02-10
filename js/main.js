const getbtn=document.getElementById("select");

getbtn.addEventListener("change", dontDisplayforms);



function formName(Questions)
{
   
    dontDisplayforms();
    const displayForm = document.getElementById(Questions); 
   
    switch (Questions){
       case 1:
          document.getElementById("Question1").style.display = 'block';
          break;

          case 2:
            document.getElementById("Question2").style.display = 'block';
            break;

            case 3:
                document.getElementById("Question3").style.display = 'block';         
                break;

            case 4:
                document.getElementById("Question4").style.display = 'block';         
                    break;

            case 5:
                document.getElementById("Question5").style.display = 'block';         
                        break;

             case 6:
                document.getElementById("Question6").style.display = 'block';         
                            break;


                case 7:
                    document.getElementById("Question7").style.display = 'block';
         
                break;

                case 8:
                    document.getElementById("Question8").style.display = 'block';
         
                    break;

                case 9:
                    document.getElementById("Question9").style.display = 'block';
         
                        break;
            
            
                case 10:
                    document.getElementById("Question10").style.display = 'block';
         
                break;

                case 11:
                    document.getElementById("Question11").style.display = 'block';
         
                    break;

                case 12:
                    document.getElementById("Question12").style.display = 'block';
         
                        break;

                case  13:
                    document.getElementById("Question13").style.display = 'block';
         
                    break;        


    }
}


function dontDisplayforms()
{
    
    document.getElementById("Question1").style.display = 'none';
    document.getElementById("Question2").style.display = 'none';
     document.getElementById("Question3").style.display = 'none'; 
   document.getElementById("Question4").style.display = 'none';
   document.getElementById("Question5").style.display = 'none';
    document.getElementById("Question6").style.display = 'none';
     document.getElementById("Question7").style.display = 'none';
     document.getElementById("Question8").style.display = 'none';
   document.getElementById("Question9").style.display = 'none'; 
   document.getElementById("Question10").style.display = 'none'; 
    document.getElementById("Question11").style.display = 'none';
    document.getElementById("Question12").style.display = 'none';
   document.getElementById("Question13").style.display = 'none'; 
   
}


function removeEffect()
{
       
        $("textarea") 
          .css("border", "none"); 
          $("textarea") 
          .css("outline", "none"); 

         $("p") 
            .css("border", "none");
            $("p") 
            .css("outline", "none"); 
}

