$(document).ready(function() {
	$(document).on('click', '.shopping-item-toggle', function(event) {
		console.log($(event.target));
		$(event.target).closest("li").find(".shopping-item").toggleClass('shopping-item__checked');
	})
	.on('click', '.shopping-item-delete', function(event) {
		console.log($(event.target));
		$(event.target).closest("li").remove("li");
	});
	$("#js-shopping-list-form").submit(function (event) {
		event.preventDefault();

		var item = $("#shopping-list-entry").val();
		var liTemplate = '\
		<li>\
            <span class="shopping-item">' + item + '</span>\
            <div class="shopping-item-controls">\
            <button class="shopping-item-toggle">\
                <span class="button-label">check</span>\
            </button>\
            <button class="shopping-item-delete">\
                <span class="button-label">delete</span>\
            </button>\
            </div>\
        </li>';
        $(".shopping-list").append(liTemplate);
        $("#shopping-list-entry").val("");
        $("#shopping-list-entry").focus();
	});
});