

const getbtn2=document.getElementById("btn2");
getbtn2.addEventListener("click", getUserInfo);

function getUserInfo(){
    let FirstName = prompt("Please enter First Name");
    let LastName = prompt("Please enter Last Name");
    let age = prompt("Please enter age");


  alert("Name: " + FirstName + " "+LastName+ "," +  " age  "+age);
 
 
}
