function fillColorTheme (x) {

  var colorTheme = [];

  for (var i = 0; i < 144; i++) {
    colorTheme[i] = x;
  }

  return colorTheme;
}




function changeTheme () {


  $(document).ready(function() {
    return addElement(randomEllsworthColor());
  });

  $("#ellsworth-button").click(function(i) {
      //Hide the existing visuals so that only one iteration displays at a single time.
      $(".art").hide();
      //alert("random theme button was clicked");

      //colorTheme = fillColorTheme(randomEllsworthColor());

  });

  $("#random-button").click(function(i) {
      $(".art").hide();
      //alert("random theme button was clicked");

      //colorTheme = fillColorTheme(randomColor());
  });

  $("#tech-button").click(function(i) {
      $(".art").hide();
      //alert("random theme button was clicked");

    //  colorTheme = fillColorTheme(randomTechColor());

  });





  //addElement( colorTheme );


}
changeTheme();







function addElement () {

  //For loop will dynamically create specified number of empty divs (CSS will make them into squares)
  for (var i = 0; i < 144; i++) {


    //Actually creating divs here
    var newDiv = document.createElement("div");
    var currentDiv = document.getElementById("div1");

    //Giving all the created divs for ability to change CSS of entire grid
    $(function() {
        $("div").addClass("art");
    });

    //Giving each individual div a unique class. Then assigning a random color (RGB value) to that class using function.
    $("div").each(function(i) {
        $(this).addClass("square" + i);
        //$(this).css('backgroundColor', randomColor()); //this one gives any random color (RGB)
        //$(this).css('backgroundColor', randomEllsworthColor());
        //$(this).css('backgroundColor', randomTechColor());

        //var colorTheme = randomEllsworthColor()
        $(this).css('backgroundColor', randomEllsworthColor());
    });

    console.log("number: " + i);


    //Putting them into the body of the file
    document.body.insertBefore(newDiv, currentDiv);

  }

} //Closes function addElement

//Caling function so that it appears in HTML

addElement();


//returns a random integer between 0 and <number passed into function as a parameter>.
function generateRandom (x) {

    return Math.floor(Math.random() * Math.floor(x));
}


//This function will return a random color (RGB value). The function forms the return value by assembling the proper RGB syntax and random numbers created in a different function.
function randomColor () {

      var maxRGBValue = 255;

      var r = generateRandom(maxRGBValue);
      var g = generateRandom(maxRGBValue);
      var b = generateRandom(maxRGBValue);

      var theColor = "rgb(" + r + "," + g + "," + b + ")";

      return theColor;
}


//Returns a hex value associated with Kelly's Spectrum painting at the SFMOMA
function randomEllsworthColor () {

    //Color hexes taken from the Ellsworth Kelly painting at the SFMOMA
    ellsworthColors = ["#2f2d2d","#c6becd","#ff8635","#3b354c","#94d35a","#f7f25e","#0170c1","#243881","#703550","#b38cb9","#7bc653","#do2624","#f2a00f","#f3e44e"];

    return ellsworthColors[generateRandom(ellsworthColors.length)];
}


//returns a color hex that big tech companies use.
function randomTechColor () {

    var airbnb = ["#FF5A5F","#00A699","#FC642D","#FC642D"];
    var facebook = ["#3B5998","#758fb6","#3B5998","#9297a2"];
    var twitter = ["#1DA1F2","#1DA1F2","#AAB8C2","#E1E8ED"];
    var google = ["#4285f4","#ea4336","#fbbc04","#34a853"];
    microsoft = ["#ffffff","#ffffff","#ffffff","#ffffff"];
    //var microsoft = ["#f45326","#80bc0c","#08a6f0","#ffba11"];

    var techColors = [airbnb,facebook,twitter,google,microsoft];

    return techColors[generateRandom(techColors.length)][generateRandom(4)];
}


function pageInteractions () {


  //Changes the color of the link to one of the ellsworth colors
  $(".link-normal").hover(function(i){
      $(this).css('color', randomEllsworthColor());
  });

  //changes theme when you click the buttons
  // $("button").click(function(){
  //     $(this).css('color', randomEllsworthColor());
  //     $(this).css('backgroundColor', randomEllsworthColor());
  //
  // });


  // $("#random-button").click(function(i) {
  //
  //
  // });





}
