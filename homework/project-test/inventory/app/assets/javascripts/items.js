// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require jquery

$(function(){
	$('#myForm input').off
	$("#all").off

	var academies = gon.academies;
	$desc = $("#desc");
	$serial = $("#serial");
	$a = $("#a");
	var items = gon.items;
	// var val = $('input[name=item[academy_id]]:checked').val();
	$('#myForm input').on('change', function() {
		$("#itembody").empty();

   	var chosen = $('input[name=radioName]:checked', '#myForm').val(); 
   		console.log(chosen)
   		// if (chosen == academies[0].name){
   		// 	console.log(academies[0].id)
   		// }

		for (var i = 0; i < academies.length; i++){
			if(chosen == academies[i].name){
				for(var j = 0; items.length; j++){
					if (academies[i].id == items[j].academy_id ){
						$('#itembody').append('<tr><td>' + items[j].description + '</td><td>' + items[j].serial + '</td><td>' + academies[i].name + '</td></tr>');
						console.log(items[j].description +" "+ items[j].serial + " " +  academies[i].name)
					}
				}
				
			}
		}

});

	$("#all").on('change', function(){
		location.reload();
	})

	

})
