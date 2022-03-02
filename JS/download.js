var i = 0;

function theme() {
	var navbar = document.getElementById("nav-bar");
	var body = document.getElementById("body");
	var footer = document.getElementById("footer");
	var btn = document.getElementById("btn");
	var icon1 = document.getElementById("icon1");
	var icon2 = document.getElementById("icon2");
	var icon3 = document.getElementById("icon3");
	if (i % 2 == 0) {
		navbar.style.backgroundImage =
			"linear-gradient(to right, #212b48, #2d4170)";
		body.style.backgroundImage = "linear-gradient(to right, #212b48, #2d4170)";
		footer.style.backgroundImage =
			"linear-gradient(to right, #212b48, #2d4170)";
		btn.style.backgroundImage = "linear-gradient(to right, #212b48, #2d4170)";
		icon1.style.backgroundImage = "linear-gradient(to right, #212b48, #2d4170)";
		icon2.style.backgroundImage = "linear-gradient(to right, #212b48, #2d4170)";
		icon3.style.backgroundImage = "linear-gradient(to right, #212b48, #2d4170)";
	} else {
		navbar.style.backgroundImage =
			"linear-gradient(to right, #4d0faf, #721a9e)";
		body.style.backgroundImage = "linear-gradient(to right, #4d0faf, #721a9e)";
		footer.style.backgroundImage =
			"linear-gradient(to right, #4d0faf, #721a9e)";
		btn.style.backgroundImage = "linear-gradient(to right, #4d0faf, #721a9e)";
		icon1.style.backgroundImage = "linear-gradient(to right, #4d0faf, #721a9e)";
		icon2.style.backgroundImage = "linear-gradient(to right, #4d0faf, #721a9e)";
		icon3.style.backgroundImage = "linear-gradient(to right, #4d0faf, #721a9e)";
	}
	i = i + 1;
}
