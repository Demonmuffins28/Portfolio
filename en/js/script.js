$(document).ready(function() {
	var swipe = new Hammer(document)

	$(window).resize(function() {
		if ($(window).width() <= 1100) {
			swipe.on("swiperight swipeleft", function(e) {
				e.preventDefault()
				if (e.type == "swiperight") {
					// open menu
					$("#nav-placeholder")
						.css("transform", "translateX(0px)")
						.fadeIn(1000)
					$("#homeBody").css("margin-left", "0px")
				} else {
					// close/hide menu
					$("#nav-placeholder").css("transform", "translateX(-60px)")
					$("#homeBody").css("margin-left", "-60px")
				}
			})
		}
	})
})
