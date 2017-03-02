
$(document).ready(function () {
  event.preventDefault();
  
  var animalarray = ["Frog", "Cat", "Dog", "Lemur", "Bear", "Mongoose", "Tiger"];











// creates button for each element in array. 

function renderButtons () {}
for (var i = 0; i < animalarray.length; i++){

var button = $("<button>");
     button.text(animalarray[i]);
     button.addClass('buttons');
    button.attr('value',animalarray[i]);
     console.log(button.attr('value'));
     console.log(button.hasClass('buttons'));
    // console.log(button.attr());
    $("#buttons").append(button);
   
};
//  end of function render buttons




$('#add-animal').on("click", function(event) {
// prevents form form submitting itself. forms allow users to press enter to submit.  
event.preventDefault();

// grabs input
var input = $("#animal-input").val().trim();
// adds it to array 
animalarray.push(input);
console.log(animalarray);
// renders button
renderButtons();
});

renderButtons();



// whenever a button is clicked... 
$('.buttons').on("click", function(){
  event.preventDefault();
  
// empty out what was there before.
$('.animal-view').empty();
// go through animal array and make a query url for each one. atm this is just creating and hiding images for every animal in the array, which is hwy only the last animal appears. it goes animal 1, hide, 2, hide, etc.

var animal = $(this).attr('value');
var queryURL= "http://api.giphy.com/v1/gifs/search?q=" + animal +  "&api_key=dc6zaTOxFJmzC";
console.log($(this).attr('value'));
       // Creates AJAX call for the specific movie button being clicked. right now zooms straight for the lemur


        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          console.log(response);
   
// get 10 images from response.data.         
for (var i = 0; i < 10; i++) {
  event.preventDefault();
             // Retrieves the animal images
          var animate = response.data[i].images.fixed_height.url;
          var still = response.data[i].images.fixed_height_still.url;
          var src = still;

        var image = $("<img src =" + src +">");
        image.attr('animate',animate);
        image.attr('still', still);
        image.attr('data-state', 'still');

        image.addClass('gif');


        console.log(image.attr('animate'));
        console.log(image.attr('still'));
          console.log(image.attr('data-state'));
       
        // console.log(image.attr());
        // // image.attr("src," still);
          $(".animal-view").append(image);





$(".gif").on("click", function () {
   var state = $(this).attr("data-state");

          if (state === 'still') {

            $(this).attr("src", $(this).attr('animate'));
          
          }
          
          else  {
          $(this).attr("src", still);
          $(this).attr("data-state", 'still');
}

}); // end on click function for gifs. 


  
}// end of for loop         

      


});
        
 // "GET" function end
     

}); // end of on.click.







 })// end of document.ready. 

     
 // end of click function   
