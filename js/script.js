
$( document ).ready(function() {
    $('#name').change(function(){
        $('#message').html($('#name').val());
var anyString = $('input#name').val();
var wu1 = anyString.charAt(0);
var wu2 = anyString.charAt(1);
var wu3 = anyString.charAt(2);
var wu4 = anyString.charAt(3);
var wu5 = anyString.charAt(4);
var wu6 = anyString.charAt(5);
var wu7 = anyString.charAt(6);
var wu8 = anyString.charAt(7);
var wu9 = anyString.charAt(8);
var wu10 = anyString.charAt(9);
var wu11 = anyString.charAt(10);
var wu12 = anyString.charAt(11);
var wu13 = anyString.charAt(12);
var wu14 = anyString.charAt(13);
var wu15 = anyString.charAt(14);
// var gabe = [wu1, wu2,wu3,wu4,wu5]
// var noise =[wu6,wu7,wu8,wu9,wu10]
// var kate =[wu11,wu12,wu13,wu14,wu15]
var edward = [wu1,wu6,wu11,wu2,wu7]
var raina = [wu12,wu3,wu8,wu13,wu4]
var ian = [wu9,wu14,wu5,wu10,wu15]
// var geist =[wu1,wu,wu11]
// var kim = [wu4,wu7,wu8]
// var andy= [wu7,wu8,wu13]

var display = edward.concat(raina,ian);
// a = document.createElement('div');
// a.setAttribute('id',display);
// document.body.appendChild(a);

$("#test").append(display);
event.preventDefault();
});
});
