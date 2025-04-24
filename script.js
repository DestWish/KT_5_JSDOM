const form = document.forms.name;
const div = form.nextElementSibling;
form.addEventListener("submit", function(e) {
	e.preventDefault();
	let inp = form.firstElementChild;
	if (inp.value) {
		div.innerText = "Привет, " + inp.value + "!";
	}
});