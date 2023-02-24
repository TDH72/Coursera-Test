var tabs = document.querySelectorAll("#tabs a");
var forms = document.querySelectorAll("form");

for (var i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener("click", function() {
		for (var j = 0; j < tabs.length; j++) {
			tabs[j].classList.remove("active");
		}
		this.classList.add("active");
		var tabId = this.getAttribute("id");
		for (var k = 0; k < forms.length; k++) {
			forms[k].classList.remove("active");
			if (forms[k].getAttribute("id") == tabId.replace("-tab", "-form")) {
				forms[k].classList.add("active");
			}
		}
	});
}
