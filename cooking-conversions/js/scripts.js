$(document).ready(function() {
  $("#stone-pound").submit(function(event) {
    var stone = parseInt($("#stone").val());
    var pounds = stone * 14;

    $(".stone-convert").text(pounds);
    $(".pounds-final").show();

    event.preventDefault();
  });
});

$(document).ready(function() {
  $("#fortnight-week").submit(function(event){
    var fortnight = parseInt($("#fortnight").val());
    var weeks = fortnight * 2;

    $(".fortnight-convert").text(weeks);
    $(".week-final").show();

    event.preventDefault();
  });
});

$(document).ready(function() {
  $("#score-yrs").submit(function(event) {
    var score = parseInt($("#score").val());
    console.log(score);
    var years = score * 20;

    $(".score-convert").text(years);
    $(".score-final").show();

    event.preventDefault();
  });
});
