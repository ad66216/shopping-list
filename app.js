// $(document).ready(function() {

// 		alert("you pressed add item");
// });
function registerEvents() {
	$(".shopping-item-toggle").click(function() {
		// $(this).parent().prev().css('text-decoration', 'line-through');
		$(this).parent().prev().toggleClass('shopping-item__checked');
	});
	// .click(function() {
	// 	.css('text-decoration', 'none');
	// });

	$(".shopping-item-delete").click(function() {
		$(this).parent().parent().remove();
	});
}

$(document).ready(function() {
	registerEvents();
	$("button.submit").click(function(event) {
		event.preventDefault();
		var itemName = $('#shopping-list-entry').val();
		var output = 
		`<li>
        	<span class="shopping-item">${itemName}</span>
        	<div class="shopping-item-controls">
          		<button class="shopping-item-toggle">
            		<span class="button-label">check</span>
          		</button>
          		<button class="shopping-item-delete">
            		<span class="button-label">delete</span>
          		</button>
        	</div>
      	</li>`;
      console.log(output);
      $("ul.shopping-list").append(output);
      registerEvents();
		// $("ul.shopping-list").append("<button>" + $("button.shopping-item-toggle") + "</button>");
	});
})
$("#shopping-list-entry").keydown(function(event) {
	if(event === 13) {
		$("button.submit").click();
	}
});



// $(document).ready(function() {
// 	$("button.submit").click(function(event) {
// 		event.preventDefault();
// 		var itemName = $('#shopping-list-entry').val();
// 		var newItem = 
// 		$("ul.shopping-list").append("<li>" + $("input#shopping-list-entry").val() + "</li>");
// 		$("ul.shopping-list").append("<button>" + $("button.shopping-item-delete").prop('value', 'Save') + "</button>");
// 		// $("ul.shopping-list").append("<button>" + $("button.shopping-item-toggle") + "</button>");
// 	});
// })
// $("#shopping-list-entry").keydown(function(event) {
// 	if(event === 13) {
// 		$("button.submit").click();
// 	}
// });