$(document).ready(function() {
  $("form#warning").submit(function(event) {
  event.preventDefault();

  $("#wresultToWarnings").show();
  var userResponseWarning = [];
  $(":input:checkbox[name=warning]:checked").each(function() {
  var stressRisk = $(this).val();
  userResponseWarning.push(stressRisk);


  $("#goodResult").show();
  var userResponseSymptoms = [];
  $(":input:checkbox[name=symptoms]:checked").each(function() {
  var badSymptons = $(this).val();
  userResponseSymptoms.push(badSymptons);
  });

   if (userResponseWarning.length === userResponseSymptoms.length) {
     $("#resultToWarnings").show();
     $("#goodResult").hide();
   }else if (userResponseWarning.length <= 3 || userResponseSymptoms.length <= 3) {
     $("#goodResult").show();
     $("#resultToWarnings").hide();
   }else if (userResponseWarning.length >= 3 && userResponseSymptoms.length >= 3) {
     $("#resultToWarnings").show();
     $("#goodResult").hide();
   }
     });
    });
   });
