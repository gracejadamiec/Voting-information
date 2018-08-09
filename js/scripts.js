$(document).ready(function(){
  $("button#ageClick").click(function(event){
    event.preventDefault();
    var age = parseInt($('#ageInput').val());
    console.log(age);


    if (age >= 18) {
      $('#under-18').hide();
      $('#over-18').show();

    } else {
      $('#over-18').hide();
      $('#under-18').show();
    }
  });
});
