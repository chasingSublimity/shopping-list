$(document).ready(function() {
	$(document).on('click', '.shopping-item-toggle', function(event) {
		console.log($(event.target));
		$(event.target).closest("li").find(".shopping-item").toggleClass('shopping-item__checked');
	})
	.on('click', '.shopping-item-delete', function(event) {
		console.log($(event.target));


	})

});