$(document).ready(function() {
$("form#question").submit(function(event) {

var gabe = parseInt($("input#ct").val());
var andy = parseInt($("input#cb").val());
var appendText = []; //We can define an array here if you need to play with the results in order or just use a string otherwise.
for (var i = 0; i < gabe; i+=andy) {
    appendText.push(andy); //This adds each thing we want to append to the array in order.
}
console.log(appendText);

var new_array = appendText.concat(); //Copy initial array

for (var i = 1; i < appendText.length; i++) {
  new_array[i] = new_array[i-1] + appendText[i];
}

console.log(new_array);

//Out here we call the append once
//Since we defined our variable as an array up there we join it here into a string
appendText = appendText.join(" ");
$("#sth").append(new_array + "<br>" );

event.preventDefault();
});
});
