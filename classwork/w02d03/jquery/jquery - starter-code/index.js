$(function(event) {
	console.log("dom is ready");
	var count =$("#count");
	var items =$("li");
	// console.log(items);
	var done = $("li.done");
	// console.log(done);

	// var li = $("<li>Sleep</li>");
	// $("#list").prepend(li);

	// var todos= ['Food shop','wash Clothes','Pay Bills'];
	// $(todos).each(function(i, todo){
	// 	console.log(todo);
	// })

	var html =$('#count').html();
	$('#count').html("5");
	// console.log(html);
	$('#count').css("color","red");

	$("li").addClass("done");

	$("#count").html("10").css("color","blue");
	var button =$("<button id='myButton'>click me</button>")
	$("body").append(button);

	$('#myButton').on("click",function(){
		console.log("Button clicked");
	})




})
