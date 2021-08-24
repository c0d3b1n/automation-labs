$(function() {
  $("#compute").click(function() {
    $("#errorMessage").html("");
    $("#errorMessage").css('background-color', 'white');
    let operators = {
      '+': function(a, b) { return a + b },
      '-': function(a, b) { return a - b },
      '*': function(a, b) { return a * b },
      '/': function(a, b) { return a / b },
    };

    let val1 = parseInt($("#val1").val()) || 0,
      val2 = parseInt($("#val2").val()) || 0,
      operat = operators[$("#operator").val()];
    if(operat){
      $("#result").val(operat(val1, val2));
    } else {
      $("#errorMessage").html("Please provider operators from +,-,*,/");
      $("#errorMessage").css('background-color', 'red');
    }
  });
});
