$(document).ready(function() {
    $("#show1").click(function() {
    $(".design").toggle();
    
    });
    });
    
    $(document).ready(function() {
    $("#show2").click(function() {
    $(".development").toggle();
    
    });
    });
    $(document).ready(function() {
    $("#show3").click(function() {
    $(".product").toggle();
    
    });
    });
    $("form#show").submit(function(event) {
 
 event.preventDefault();
 var name = $.trim($('#name').val());
 var email = $.trim($('#email').val());
 if ((name === '') || (email === '')) {
   alert('If you submit,you should enter at least name and email.');
   return false;
 } else {
   alert("We have received your message.Thank you for reaching out for us");
   $("#show")[0].reset();
 }
});
$("#image1").hover(function(){
  $("#image1").css("background-color", "white",);
});
    