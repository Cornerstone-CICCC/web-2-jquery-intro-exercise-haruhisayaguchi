$(function () {
  // Exercise 1
  $("#toggleButton").on("click", function () {
    $("#myParagraph").slideToggle();
  })

  // Exercise 2
  $("#colorButton").on("click", function () {
    $("#colorDiv").css({ "background-color": "yellow" })
  })

  // Exercise 3
  $("#addClassButton").on("click", function () {
    $("#classDiv").addClass("newClass")
  })
  $("#removeClassButton").on("click", function () {
    $("#classDiv").removeClass("newClass")
  })

  // Exercise 4
  $("#fadeInButton").on("click", function () {
    $("#fadeDiv").fadeIn();
  })
  $("#fadeOutButton").on("click", function () {
    $("#fadeDiv").fadeOut();
  })

  // Exercise 5
  $("#slideUpButton").on("click", function () {
    $("#slideDiv").slideUp();
  })
  $("#slideDownButton").on("click", function () {
    $("#slideDiv").slideDown();
  })

})