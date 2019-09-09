$(function() {
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("white")
    $("body").addClass("dark-background")

  });

$("button#light").click(function() {
  $("body").removeClass();
  $("body").addClass("light-background")
  $("body").addClass("black")
});

});
