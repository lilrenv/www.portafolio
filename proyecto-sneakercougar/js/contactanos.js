document.getElementById("problemReportForm").addEventListener("submit", function(event) {
	event.preventDefault();
	alert("Form submitted! Name: " + document.getElementById("name").value + ", Email: " + document.getElementById("email").value + ", Problem: " + document.getElementById("problem").value + ", Message: " + document.getElementById("message").value);
});