/*name
description
date
start/end time
SUBMIT*/

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var descriptionInput = $("input#description").val();
    var dateInput = $("input#date").val();
    var startInput = $("input#start").val();
    var endInput = $("input#end").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".description").text(descriptionInput);
    $(".date").text(dateInput);
    $(".start").text(startInput);
    $(".end").text(endInput);

    $("#ourModal").show();
    //$("#ourModal").show();
    //$(".formOne") .hide();//
    //$("#ourModal").modal();//
    //debugger;
    //$("#ourModal").modal('show');
    event.preventDefault();



  });

  $("#ourModal").click(function() {
    $("#ourModal").hide();

    //event.preventDefault();
  });

});
