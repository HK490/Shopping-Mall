


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

// CREATE ACCOUNT MODAL

$("#createAcctBtn").on("click", function() {
  $("#createAcctModal").show();
});

$("#cancelCreateAcctBtn").on("click", function() {
  $("#createAcctModal").hide();
  $("#createAcctEmail").empty();
  $("#createAcctPassword").empty();
});

$("#createAcctClose").on("click", function() {
  $("#createAcctModal").hide();
  $("#createAcctEmail").empty();
  $("#createAcctPassword").empty();
});

// Track Order MODAL
$("#trackOrderBtn").on("click", function() {
  $("#trackOrderModal").show();
});

$("#trackOrderClose").on("click", function() {
  $("#trackOrderModal").hide();
});

$("#trackOrderFooterClose").on("click", function() {
  $("#trackOrderModal").hide();
});

// TERMS & POLICY MODAL
$("#termsPolicyBtn").on("click", function() {
  $("#termsPolicyModal").show();
});

$("#termsPolicyClose").on("click", function() {
  $("#termsPolicyModal").hide();
});

$("#termsPolicyFooterClose").on("click", function() {
  $("#termsPolicyModal").hide();
});




// Create Acct and Sign In Hover
  $("#createAcctBtn").hover(function(){
    $(this).append($(`<p>Create Account</p>`))
  }, function(){
    $(this).find("p").last().remove();
  });

  $("#signInBtn").hover(function(){
    $(this).append($(`<p>Login</p>`))
  }, function(){
    $(this).find("p").last().remove();
  });
  

// Importing Scarf Data to Page
function runScarfData(){

  $.get("/api/scarfData", function(data){
    for(let i=0; i<data.length;i++){

      $(".scarfInfo").hide();

      $(".card").on("mouseover", function(){
        $(this).css({"background": "black", "color": "white"});
        $(this).find("img").hide();
        $(this).find(".scarfInfo").show();
        }).on("mouseleave", function(){
          $(this).css({"background": "white", "color": "black"});
          $(this).children("img").show();
          $(this).children(".scarfInfo").hide()
        })

      let dataThree = data.slice(0,3);
      let dataSix = data.slice(3,6);
      let dataNine = data.slice(6,9)

      $("#rowOneCollections").append(`<div class="card">
      <img id="image1" src="${dataThree[i].scarfImage}" class="card-img-top"
          alt="...">
      <div class="scarfInfo mx-auto my-auto" style="width: 18rem;">
          <div class="card-body text-center justify-content-center">
              <div class="card-header">
                  <h5 class="card-title">${dataThree[i].scarfName}</h5>
              </div>
              <p class="card-text">${dataThree[i].scarfInfo}</p>
              <div class="card-footer text-white">
                  <p class="price">${dataThree[i].scarfPrice}</p>
                  <a href="#" class="card-link text-white">Add To Cart</a>
              </div>
          </div>
      </div>
  </div>`)

  $("#rowTwoCollections").append(`<div class="card">
  <img id="image1" src="${dataSix[i].scarfImage}" class="card-img-top"
      alt="...">
  <div class="scarfInfo mx-auto my-auto" style="width: 18rem;">
      <div class="card-body text-center justify-content-center">
          <div class="card-header">
              <h5 class="card-title">${dataSix[i].scarfName}</h5>
          </div>
          <p class="card-text">${dataSix[i].scarfInfo}</p>
          <div class="card-footer text-white">
              <p class="price">${dataSix[i].scarfPrice}</p>
              <a href="#" class="card-link text-white">Add To Cart</a>
          </div>
      </div>
  </div>
</div>`)

$("#rowThreeCollections").append(`<div class="card">
<img id="image1" src="${dataNine[i].scarfImage}" class="card-img-top"
    alt="...">
<div class="scarfInfo mx-auto my-auto" style="width: 18rem;">
    <div class="card-body text-center justify-content-center">
        <div class="card-header">
            <h5 class="card-title">${dataNine[i].scarfName}</h5>
        </div>
        <p class="card-text">${dataNine[i].scarfInfo}</p>
        <div class="card-footer text-white">
            <p class="price">${dataNine[i].scarfPrice}</p>
            <a href="#" class="card-link text-white">Add To Cart</a>
        </div>
    </div>
</div>
</div>`)


    }
  })
}

runScarfData();

