var state = {
    groceryItems:[]
};

//add item into grocery
function addItem(state, item) {
   state.groceryItems.push(item);
};


//render list
function renderList(state, element) {
   var itemsHTML = state.groceryItems.map(function(item) {
       return '<li id="'+ item +'"><span class="shopping-item">' + item + '</span><button class="shopping-item-toggle"><span>check</span></button>' 
       + '<span> </span> ' + '<button class="shopping-item-delete"><span>delete</span></button>' +'</li>';
   });
   element.html(itemsHTML);
};


// Event listeners: Add item button
$('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    var item = $('#shopping-list-entry').val()
    addItem(state, item);
    renderList(state, $('.shopping-list'));
    $('#shopping-list-entry').val('');
});

function deleteListItem(state, jQueryElement){
	for (var i=0; i<state.groceryItems.length; i++) {
		if (jQueryElement === state.groceryItems[i]) {
				delete state.groceryItems[i];
		}
	}
	return state.grocery;
}

// Event listener: delete button
$('ul').on('click', 'button.shopping-item-delete', function(event) {
	var toDelete = $(this).closest('li');
  $(this).closest('li').remove();
  var deleteIndexPosition = state.groceryItems.indexOf(toDelete.attr('id'));
  state.groceryItems = state.groceryItems.splice(deleteIndexPosition, 1);

});	

// Event listener: check button
$('ul').on('click', 'button.shopping-item-toggle', function(event) {
	$(this).closest('li').toggleClass('shopping-item__checked');
});

// Remaining issues:
// Strikethrough bar is black not gray?


