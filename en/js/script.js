import Swup from "swup"
const swup = new Swup() // only this line when included with script tag

init()

swup.on("contentReplaced", init)

function init() {
	// For navbar hiding on smaller screen
	var swipe = new Hammer(document)

	if ($(window).width() <= 1100) {
		swipe.on("panright  panleft", function(e) {
			e.preventDefault()
			if (e.type == "panright") {
				// open menu
				$("#nav-placeholder").css("transform", "translateX(0px)")
				$("#homeBody").css("margin-left", "60px")
			} else {
				// close/hide menu
				$("#nav-placeholder").css("transform", "translateX(-60px)")
				$("#homeBody").css("margin-left", "0px")
			}
		})
	} else {
		$("#nav-placeholder").css("transform", "translateX(0px)")
		$("#homeBody").css("margin-left", "60px")
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
			//$("#homeBody").css("margin-left", "0px");
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

	glitching()
}

function glitching() {
	var bg = $(".myName")[0]
	var count = 5
	for (var i = 0; i < count; i++) {
		var glitchBox = document.createElement("::after")
		glitchBox.className = "box"
		bg.appendChild(glitchBox)
	}
	// Make a glitchy effect for the full page (full image usualy)
	//setInterval(function() {
	// var glitch = $(".box")
	// for (var i = 0; i < glitch.length; i++) {
	// 	glitch[i].style.left = Math.floor(Math.random() * 60) + "%"
	// 	glitch[i].style.top = Math.floor(Math.random() * 60) + "%"
	// 	glitch[i].style.width = Math.floor(Math.random() * 150) + "px"
	// 	glitch[i].style.height = Math.floor(Math.random() * 50) + "px"
	// }
	//}, 400)
}
