$(function() {
	//get shopping list
	var shoppingList = $("#shoppingList");
	var items=["Bananas","Milk","Cookies"];

	for(var i = 0; i <items.length; i++){
		shoppingList.append(items[i]);
	}
});