$(function(){

	$modal = $("#modal")
	$show = $("#show")
	console.log($modal)

	$show.on("click",function(){
		$modal.modal("show")
	})
	$("body").css("color","red")
});