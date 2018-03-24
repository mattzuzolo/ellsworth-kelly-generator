function addElement () {

  for (var i = 0; i < 144; i++) {

    var newDiv = document.createElement("div");
    var currentDiv = document.getElementById("div1");


    $(function() {
        $("div").addClass("art");
    });

    $("div").each(function(i) {
        $(this).addClass("uniqueName" + i);
        $(this).css('backgroundColor', randomColor());
    });




    // $(".uniqueName6").css('backgroundColor', '#e580ff');
    // // $(this).css('backgroundColor', 'red');

    document.body.insertBefore(newDiv, currentDiv);

  }

} //Closes function addElement

addElement();

function randomColor () {

      var r = 0;
      var g = 0;
      var b = 0;

      r = Math.floor(Math.random() * Math.floor(255));
      g = Math.floor(Math.random() * Math.floor(255));
      b = Math.floor(Math.random() * Math.floor(255));

      var theColor = "rgb(" + r + "," + g + "," + b + ")";

      return theColor;
}
