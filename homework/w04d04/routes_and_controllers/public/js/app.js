$(function(){

	$modal = $("#modal")
	$show = $("#show")

	$show.on("click",function(){
		$modal.modal("show")
	})
	$("body").css("color","red")
});