$(document).ready(function(){

// console.log('jquery working');

  $(".like-topic").on("click", function(){
    const id = $(this).attr('data-x')
    //console.log($(this).attr('data-x'));

    $.ajax({
      type: "PUT",
      url: `http://localhost:3000/forum/${id}`,
    })
    .then(function() {
      console.log('successfully updated');
      window.location.replace('/')
    })
    .catch(function(err) {
      console.log(err, "ERROR");
    });

 });

 $(".comment-like").on("click", function(){
   const commentId = $(this).attr('data-z');
   let url = window.location.href;
   const urlId = url.substring(url.lastIndexOf('/') + 1);
   console.log(commentId);
   console.log(urlId);

   $.ajax({
     type: "PUT",
     url: `http://localhost:3000/forum/${urlId}`
   })
   .then(function() {
     console.log('successfully updated');
    //  window.location.replace(`/`);
   })
   .catch(function(err) {
     console.log(err, "ERROR");
  });

});



});
