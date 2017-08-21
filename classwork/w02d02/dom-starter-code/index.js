// var selected = document.querySelectorAll('li.selected');
// console.log(selected);

// for (var i=0;i<selected.length;i++){
// selected[i].innerHTML = "HELLO NIALL";
// }

//Adding a new element
// var pTag = document.createElement('p');
// var wrapperId = document.getElementById("wrapper");

// pTag.innerHTML= "Hello Divesh, this is a new tag, you are welcome!";

// wrapperId.appendChild(pTag);

var list = ['Niall','Ollie', 'Richard', 'Steve', 'Tim', 'Lexie', 'Rob', 'Kieron'];



// for (var i=0;i<list.length;i++){
// 	if (htmlList.length>list.length){
// 	for (var j=0;j<htmlList.length;j++){
// 	htmlList[j].innerHTML =list[i];
// }

// }
// }
// htmlList[0].innerHTML=list[0];

var ul = document.getElementById('list');

function addnewLi(text){
	var newLi= document.createElement('li');
	newLi.innerHTML=text;
	ul.appendChild(newLi);
}

for(var i=0; i<list.length;i++){
	addnewLi(list[i]);
}



var htmlList= document.getElementsByTagName("li");

for (var i=0;i<htmlList.length;i++){
	if (i%2===0){
		htmlList[i].className="even";
		//htmlList[i].classList.add("even");
	}
}
var countSpan = document.getElementById("count");
countSpan.innerHTML=htmlList.length;




