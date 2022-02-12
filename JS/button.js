const link = document.querySelector(".download_link");

document.addEventListener("DOMContentLoaded", function () {
	this.querySelector(".icon").addEventListener("click", function () {
		let waitClass = "waiting",
			runClass = "running",
			cl = this.classList;

		if (!cl.contains(waitClass) && !cl.contains(runClass)) {
			cl.add(waitClass);
			setTimeout(function () {
				cl.remove(waitClass);
				setTimeout(function () {
					cl.add(runClass);
					setTimeout(function () {
						cl.remove(runClass);
						/*let download = "/Users/mrcode/Desktop/Code/Kamani/Logo.png.zip";*/
						let download = "https://1drv.ms/u/s!AgIqR0C69hk_mRihP97gxCpXY-RZ?e=IHiU7j";
						window.location.href = download;
						download_link.href = download;
					}, 4000);
				}, 200);
			}, 1800);
		}
	});
});
