$(document).ready(function() {
	$("#homePage").hover(
		function() {
			$("#home").text("HOME")
		},
		function() {
			$("#home").html('<img class="home" src="/image/tent 1.svg" />')
		}
	)
	$("#aboutPage").hover(
		function() {
			$("#about").text("ABOUT")
		},
		function() {
			$("#about").html('<img class="about" src="/image/id-card-solid 1.svg" />')
		}
	)
	$("#skillsPage").hover(
		function() {
			$("#skills").text("SKILLS")
		},
		function() {
			$("#skills").html('<img class="skills" src="/image/knife 1.svg" />')
		}
	)
	$("#workPage").hover(
		function() {
			$("#work").text("MY WORK")
		},
		function() {
			$("#work").html('<img class="work" src="/image/axe 1.svg" />')
		}
	)
	$("#contactPage").hover(
		function() {
			$("#contact").text("CONTACT")
		},
		function() {
			$("#contact").html('<img class="contact" src="/image/contact 1.svg" />')
		}
	)

	activePage()
})

function activePage() {
	var fileName = location.pathname.split("/").slice(-1)
	if (fileName == "index.html") {
		$("#homePage").toggleClass("activePage")
	} else if (fileName == "about.html") {
		$("#aboutPage").toggleClass("aactivePage")
	} else if (fileName == "skills.html") {
		$("#skillsPage").toggleClass("activePage")
	} else if (fileName == "work.html") {
		$("#workPage").toggleClass("activePage")
	} else if (fileName == "contact.html") {
		$("#contactPage").toggleClass("activePage")
	}
}
