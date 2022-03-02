var i = 0;

function theme() {
	var navbar = document.getElementById("nav-bar");
	var banner = document.getElementById("banner");
	var footer = document.getElementById("footer");
	var btn1 = document.getElementById("btn1");
	var btn2 = document.getElementById("btn2");
	var icon1 = document.getElementById("icon1");
	var icon2 = document.getElementById("icon2");
	var icon3 = document.getElementById("icon3");
	if (i % 2 == 0) {
		navbar.style.backgroundImage =
			"linear-gradient(to right, #212b48, #2d4170)";
		banner.style.backgroundImage =
			"linear-gradient(to right, #212b48, #2d4170)";
		footer.style.backgroundImage =
			"linear-gradient(to right, #212b48, #2d4170)";
		btn1.style.backgroundImage = "linear-gradient(to right, #212b48, #2d4170)";
		btn2.style.backgroundImage = "linear-gradient(to right, #212b48, #2d4170)";
		icon1.style.backgroundImage = "linear-gradient(to right, #212b48, #2d4170)";
		icon2.style.backgroundImage = "linear-gradient(to right, #212b48, #2d4170)";
		icon3.style.backgroundImage = "linear-gradient(to right, #212b48, #2d4170)";
	} else {
		navbar.style.backgroundImage =
			"linear-gradient(to right, #4d0faf, #721a9e)";
		banner.style.backgroundImage =
			"linear-gradient(to right, #4d0faf, #721a9e)";
		footer.style.backgroundImage =
			"linear-gradient(to right, #4d0faf, #721a9e)";
		btn1.style.backgroundImage = "linear-gradient(to right, #4d0faf, #721a9e)";
		btn2.style.backgroundImage = "linear-gradient(to right, #4d0faf, #721a9e)";
		icon1.style.backgroundImage = "linear-gradient(to right, #4d0faf, #721a9e)";
		icon2.style.backgroundImage = "linear-gradient(to right, #4d0faf, #721a9e)";
		icon3.style.backgroundImage = "linear-gradient(to right, #4d0faf, #721a9e)";
	}
	i = i + 1;
}
