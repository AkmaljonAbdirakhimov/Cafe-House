$(".hamburger-menu").click(function () {
	$(".nav").slideToggle();
});
$(".nav ul li a").click(function () {
	$(".nav ul li a").removeClass("active");
	$(this).addClass("active");
});
