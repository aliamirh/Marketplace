$(document).ready(function(){
  $("#formOne").submit(function(){
    // var personName = $("input#name").val();
    // var appointment = $("input#appointmentType").val();
    // var time = $("input#time").val();
    //
    // $("#inputName").text(personName);
    // $("#inputTime").text(time);
    // $("#input-appointment").text(appointment);
    //
    // $("#confirmation").show();
    var meatType = $("#meat").val();
    var topping1 = $("#top1").val();
    var topping2 = $("#top2").val();
    console.log(meatType, topping1, topping2);

  event.preventDefault();
  });
});
