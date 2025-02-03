function addParagraph()
{

let parText=document.getElementById("txtpara").value;
if(parText=="")
{
  alert("Please enter paragraph to be added")
  document.getElementById("txtpara").focus();
  return;
}
const para = document.createElement("p");
const node = document.createTextNode(parText);
para.appendChild(node);

const element = document.getElementById("javascript");
element.appendChild(para);

}