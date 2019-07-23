//my javascript/jquery code will go below here
$(document).ready(function() {
  //initialize global variables

  //create initial string of themed buttons
  var gifs = ["Lions", "Tigers", "Bears", "Oh my!"];

  // display retrieved content
  function displayGifContent() {
    var gif = $(this).attr("data-name");
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=dc6zaTOxFJmzC&limit=10";

    // Create ajax call for the desired gif button clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response)
      $("#images-container").empty();
      for (var i = 0; i < response.data.length; i++) {
        console.log("loop works")
        var gifDiv = $("<div>");

        var rating = response.data[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var gifImage = $("<img>");
        gifImage.attr("src", response.data[i].images.fixed_height.url);

        gifDiv.append(p);
        gifDiv.append(gifImage);
console.log(gifDiv)
        $("#images-container").append(gifDiv);
      }
      // Create a div for the gif
     // var gifDiv = $('<div class= "gif">');
      // Retrieve the rating data
      //var ratingData = response.Rated;
      //console.log(ratingData);
      // Create an element where the rating data can be displayed
     // var ratingPar = $("<p>").text("Rating: " + ratingData);

      // Display rating data
      //gifDiv.append(ratingPar);

      // Creates an element to hold the image
      //var gifImage = $("<img>").attr("src", response.images.original.url);

      // Appends the image
      //gifDiv.append(gifImage);

      // Put the gif above the previously appended gifs.
     // $("#gif").append(gifDiv);
    });
  }

  // Function for displaying movie data
  function renderButtons() {

    // Deletes the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#favorite-buttons").empty();
    // Loops through the array of movies
    for (var i = 0; i < gifs.length; i++) {

      // Then dynamicaly generates buttons for each movie in the array
      // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      var a = $("<button>");
      // Adds a class of movie to our button
      a.addClass("gif");
      // Added a data-attribute
      a.attr("data-name", gifs[i]);
      // Provided the initial button text
      a.text(gifs[i]);
      // Added the button to the buttons-view div
      $("#favorite-buttons").append(a);
    }
  }

  $("#add-gif").on("click", function(event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();

    // This line will grab the text from the input box
    var gif = $("#gif-input")
      .val()
      .trim();
    // The movie from the textbox is then added to our array
    gifs.push(gif);
    renderButtons()
  });

  $("gifs").on("click", function() {
    console.log("clicked");
    var buttons = $(this).attr("$(this).gif");
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      buttons +
      "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var results = response.data.length;

     
    });
  });

  renderButtons();

  $(document).on("click", ".gif", displayGifContent);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();
});
//set up ajax call for giff retrieval
//set up a function for retrieving the giff content based on the context of the buttons
//create a function for appendinding new buttons
