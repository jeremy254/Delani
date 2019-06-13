
$(document).ready(function() {
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

   $("#do1").click(function() {
     $(".designimage").toggle();

     $(".designdesc").show();
   });


   $("#do1").mousedown(function() {
     $(".designdesc").fadeOut(100);
   });



   $("#do2").click(function() {
     $(".devimage").toggle();
     $(".developdesc").show();
   });

   $("#do2").mousedown(function() {
     $(".developdesc").fadeOut(100);
   });

   $("#do3").click(function() {
     $(".productimage").toggle();
     $(".productdesc").show();
   });
   $("#do3").mousedown(function() {
     $(".productdesc").fadeOut(100);
   });





 });