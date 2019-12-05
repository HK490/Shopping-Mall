
$(".scarfInfo").hide();

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
  $(this).find("img").hide();
  $(this).find(".scarfInfo").show();
  // $(".imageCollection").append(`<ul>
  //   <li>hi</li>
  // <ul>`)
  }).on("mouseleave", function(){
    $(this).css({"background": "white", "color": "black"});
    $(this).children("img").show();
    $(this).children(".scarfInfo").hide()
  })

  $("#createAcctBtn").hover(function(){
    $(this).append($(`<p>Create Account</p>`))
  }, function(){
    $(this).find("p").last().remove();
  });
  
