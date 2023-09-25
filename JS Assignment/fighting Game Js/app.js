var img = document.getElementById("img-1");
var chatactor = document.getElementById("chatactor");
var a = 0;

document.addEventListener("keydown", function (event) {
  var key = event.key;

  if (key === "ArrowRight" && a < 50) {
    a += 1;
    img.style.left = a + "%";
  } else if (key === "ArrowLeft" && a > 0) {
    a -= 1;
    img.style.left = a + "%";
  } else if (key === "ArrowUp") {
    chatactor.src = "pic-animetion/iron-fly.gif";
  } else if (key === "ArrowDown") {
    chatactor.src = "pic-animetion/iron-man-stance.gif";

    setTimeout(() => {
      chatactor.src = "pic-animetion/iron-walk.gif";
    }, 500);
  }
});
