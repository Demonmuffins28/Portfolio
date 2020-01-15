$(document).ready(function() {
	var swipe = new Hammer(document)

	if ($(window).width() <= 1100) {
		swipe.on("panright  panleft", function(e) {
			e.preventDefault()
			if (e.type == "panright") {
				// open menu
				$("#nav-placeholder").css("transform", "translateX(0px)")
				$("#homeBody").css("margin-left", "0px")
			} else {
				// close/hide menu
				$("#nav-placeholder").css("transform", "translateX(-60px)")
				$("#homeBody").css("margin-left", "-60px")
			}
		})
	} else {
		$("#nav-placeholder").css("transform", "translateX(0px)")
		$("#homeBody").css("margin-left", "0px")
	}

	$(window).resize(function() {
		if ($(window).width() <= 1100) {
			swipe.on("panright  panleft", function(e) {
				e.preventDefault()
				if (e.type == "panright") {
					// open menu
					$("#nav-placeholder").css("transform", "translateX(0px)")
					$("#homeBody").css("margin-left", "0px")
				} else {
					// close/hide menu
					$("#nav-placeholder").css("transform", "translateX(-60px)")
					$("#homeBody").css("margin-left", "-60px")
				}
			})
		} else {
			$("#nav-placeholder").css("transform", "translateX(0px)")
			$("#homeBody").css("margin-left", "0px")
		}
	})

	var fileName = location.pathname.split("/").slice(-1)
	if (fileName == "about.html") {
		// Star-1
		setInterval(function() {
			var randomColumn = Math.floor(Math.random() * 21)
			var randomRow = Math.floor(Math.random() * 21)
			$(".star-1").css("grid-column", randomColumn)
			$(".star-1").css("grid-row", randomRow)
		}, 3000)

		// Star-2
		setInterval(function() {
			var randomColumn = Math.floor(Math.random() * 21)
			var randomRow = Math.floor(Math.random() * 21)
			$(".star-2").css("grid-column", randomColumn)
			$(".star-2").css("grid-row", randomRow)
		}, 4500)

		// Star-3
		setInterval(function() {
			var randomColumn = Math.floor(Math.random() * 21)
			var randomRow = Math.floor(Math.random() * 21)
			$(".star-3").css("grid-column", randomColumn)
			$(".star-3").css("grid-row", randomRow)
		}, 3500)

		// Star-4
		setInterval(function() {
			var randomColumn = Math.floor(Math.random() * 21)
			var randomRow = Math.floor(Math.random() * 21)
			$(".star-4").css("grid-column", randomColumn)
			$(".star-4").css("grid-row", randomRow)
		}, 4000)

		// Star-5
		setInterval(function() {
			var randomColumn = Math.floor(Math.random() * 21)
			var randomRow = Math.floor(Math.random() * 21)
			$(".star-5").css("grid-column", randomColumn)
			$(".star-5").css("grid-row", randomRow)
		}, 5000)

		// Star-6
		setInterval(function() {
			var randomColumn = Math.floor(Math.random() * 21)
			var randomRow = Math.floor(Math.random() * 21)
			$(".star-6").css("grid-column", randomColumn)
			$(".star-6").css("grid-row", randomRow)
		}, 2500)

		// Star-7
		setInterval(function() {
			var randomColumn = Math.floor(Math.random() * 21)
			var randomRow = Math.floor(Math.random() * 21)
			$(".star-7").css("grid-column", randomColumn)
			$(".star-7").css("grid-row", randomRow)
		}, 3300)

		// Star-8
		setInterval(function() {
			var randomColumn = Math.floor(Math.random() * 21)
			var randomRow = Math.floor(Math.random() * 21)
			$(".star-8").css("grid-column", randomColumn)
			$(".star-8").css("grid-row", randomRow)
		}, 4200)
	}
})
