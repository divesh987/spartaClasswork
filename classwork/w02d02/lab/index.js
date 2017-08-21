document.addEventListener('DOMContentLoaded',function(){
var form = document.getElementById("myForm");
var fname= document.getElementById("fname");

form.addEventListener("submit",function(){
	event.preventDefault();
	newDiv(fname.value)
})

function newDiv(text){
	var newDiv= document.createElement("div");
	newDiv.className="lol";
	newDiv.innerHTML=text;
	document.body.appendChild(newDiv);
}

})