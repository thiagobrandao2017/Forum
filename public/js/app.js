$(document).ready(function(){



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



});
