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
    var person = $("#name").val();
    var address = $("#address").val();
    var meatType = $("#meat").val();
    var topping1 = $("#top1").val();
    var topping2 = $("#top2").val();
    console.log(meatType, topping1, topping2, person, address);
    $("#outputPerson").text(person);
    $("#outputMeat").text(meatType);
    $("#outputTopping1").text(topping1);
    $("#outputTopping2").text(topping2);
    $("#outputAddress").text(address);
    $("#reciept").show();
  event.preventDefault();
  });
});


// change val in options to correct prices
// sum the total val of the order
// with each val, correspond to correct item
// print items
