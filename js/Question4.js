
const getbtn4=document.getElementById("btn4");
getbtn4.addEventListener("click", addParagraph);

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

	const element = document.getElementById("javascript1");
	element.appendChild(para);
	document.getElementById("txtpara").value="";

}