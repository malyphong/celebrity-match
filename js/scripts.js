$(document).ready(function() {
  $("#gender").submit(function(event){
    event.preventDefault();

     var selected = $("input[type='radio'][name='gender']:checked");

    if (selected.val() === "male") {
      $("form.male-survey").show();

    } else if (selected.val() === "female") {
      $("form.female-survey").show();

    } else if (selected.val() === "other") {
      $("form.other-survey").show();

    } else {
      alert("Nope!");
    }


  });
});











// $(document).ready(function() {
//   $(".male-survey").submit(function(event) {
//     event.preventDefault();
//
//     if {
//       ("")
//     } else if {
//
//     } else {
//
//     }
//   });
// });

  // if ("#male === .val()"
