// SIGNIN MODAL

$("#signInBtn").on("click", function() {
  $("#signInModal").show();
});

$("#cancelSignInBtn").on("click", function() {
  $("#signInModal").hide();
  $("#signInEmail").empty();
  $("#signInPassword").empty();
});

$(".close").on("click", function() {
  $("#signInModal").hide();
  $("#signInEmail").empty();
  $("#signInPassword").empty();
});


// On Hover Image

// $(".card").on("mouseover", function(){
//   $(this).css({
//     'background': "black",
//     'color': "white",
//   })
// })

// $(".card").on("mouseleave", function(){
//   $(this).css({
//     'background': "white",
//     'color': "black"
//   })
// })

$(".card").on("mouseover", function(){
  $(this).css({"background": "black", "color": "white"});
  $(this).hasClass("imageCollection").hide()
  }).on("mouseleave", function(){
    $(this).css({"background": "white", "color": "black"});
  })

