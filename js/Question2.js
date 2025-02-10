

const getbtn2=document.getElementById("btn2");
getbtn2.addEventListener("click", getUserInfo);

function getUserInfo(){
    let FirstName = prompt("Please enter First Name");
    let LastName = prompt("Please enter Last Name");
    let age = prompt("Please enter age");

    while(FirstName=="" || LastName=="" || age=="")
    {
      if(FirstName=="")
        {
        
          FirstName = prompt("Please enter First Name");
        }
       else if(LastName=="" )
          {
          
            LastName = prompt("Please enter Last Name");
          }
        else if(age=="")
        {
          age = prompt("Please enter age");
        }


    }

  alert("Name: " + FirstName + " "+LastName+ "," +  " age  "+age);
 
 
}
