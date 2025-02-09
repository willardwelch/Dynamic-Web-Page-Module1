



const getbtn=document.getElementById("btn1");

getbtn.addEventListener("click", AddTwoNumbers);



function AddTwoNumbers(){

    let x= 5;

    let y = 10;

  let sum= (parseInt(x)+parseInt(y));

  document.getElementById("demo").innerHTML = "The sum is: "+sum;

  dontDisplayforms();

  document.getElementById("Question1").style.display = 'block';
  document.getElementById("Question1").style.font.bold;

  }





