// Code goes here

$(document).ready(function() {

  $("#search-submit").click(function() {
    $("#search-results").show();
    $("#auto-complete-wrapper").hide();
  });

  $("#search-field").keyup(function() {
    if ($(this).val().length > 3) {
      $("#auto-complete-wrapper").show();
    } else {
      $("#auto-complete-wrapper").hide();
    }
  });

});