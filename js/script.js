$(document).ready(function () {
	$(".a3").click(function () {
		$(".a2").removeClass("abgc").addClass("a-col")
		$(".a3").addClass("abgc").removeClass("a-col")
		$(".div8").addClass("dn")
		$(".div9").removeClass("dn")

	})
	$(".a2").click(function () {
		$(".a3").removeClass("abgc").addClass("a-col")
		$(".a2").addClass("abgc").removeClass("a-col")
		$(".div9").addClass("dn")
		$(".div8").removeClass("dn")

	})
})