const swup = new Swup(); // only this line when included with script tag

const tentHTML = $("#home").html();
const cardHTML = $("#about").html();
const knifeHTML = $("#skills").html();
const axeHTML = $("#work").html();
const contactHTML = $("#contact").html();

init();

swup.on("contentReplaced", init);
swup.on("contentReplaced", activePage);

function init() {
  if ($(window).width() >= 700) {
    $("#homePage").hover(
      function() {
        $("#home").text("HOME");
      },
      function() {
        $("#home").html(tentHTML);
        //$("#home").html('<img class="home" src="../image/tent 1.*.svg" />');
      }
    );
    $("#aboutPage").hover(
      function() {
        $("#about").text("ABOUT");
      },
      function() {
        $("#about").html(cardHTML);
        //$("#about").html('<img class="about" src="../image/id-card-solid 1.svg" />');
      }
    );
    $("#skillsPage").hover(
      function() {
        $("#skills").text("SKILLS");
      },
      function() {
        $("#skills").html(knifeHTML);
        //$("#skills").html('<img class="skills" src="../image/knife 1.svg" />');
      }
    );
    $("#workPage").hover(
      function() {
        $("#work").text("MY WORK");
      },
      function() {
        $("#work").html(axeHTML);
        //$("#work").html('<img class="work" src="../image/axe 1.svg" />');
      }
    );
    $("#contactPage").hover(
      function() {
        $("#contact").text("CONTACT");
      },
      function() {
        $("#contact").html(contactHTML);
        //$("#contact").html('<img class="contact" src="../image/contact 1.svg" />');
      }
    );
  }
}

function activePage() {
  $(".activePage").toggleClass("activePage");
  var fileName = location.pathname.split("/").slice(-1);
  if (fileName == "index.html") {
    $("#homePage").toggleClass("activePage");
  } else if (fileName == "about.html") {
    $("#aboutPage").toggleClass("activePage");
  } else if (fileName == "skills.html") {
    $("#skillsPage").toggleClass("activePage");
  } else if (fileName == "work.html") {
    $("#workPage").toggleClass("activePage");
  } else if (fileName == "contact.html") {
    $("#contactPage").toggleClass("activePage");
  }
}
