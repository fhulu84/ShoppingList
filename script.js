var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

//Create a delete button and append it to each list item
var nodes = document.getElementsByTagName("LI");
for(var i=0; i<nodes.length; i++) {
	addDeleteButton(nodes[i]);
}

//Toggle on/off list item
ul.addEventListener("click", function(e) {
	if(e.target.tagName === "LI") {
		e.target.classList.toggle("done");
	}
});


function addDeleteButton(node) {
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u2717");
	span.className = "del";
	span.appendChild(txt);
	span.onclick = function() {
		ul.removeChild(this.parentElement);
	}
	node.appendChild(span);
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	if(!itemExists()) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(capitalizeFirstLetter(input.value)));
		addDeleteButton(li);
		ul.appendChild(li);
	}

	input.value = "";	
}

function capitalizeFirstLetter(str){
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function addListAfterClick() {
	if(inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(e) {
	if(inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


function itemExists() {
	var items = document.getElementsByTagName("li");
	var item = capitalizeFirstLetter(input.value);
	for (var i = 0; i < items.length; i++) {
		if(item === items[i].textContent.slice(0, -1)) {
			return true;
		}
	}

	return false;
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);