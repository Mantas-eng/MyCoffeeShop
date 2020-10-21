console.log("Hello from a script file");
window.addEventListener("DOMContentLoaded", function (e) {
  console.log("the page is loaded");

  let btn = document.querySelector("#click-me");
  btn.addEventListener("click", function (e) {
    console.log("the button was clicked");

    window.addEventListener("orientationchange", function (e) {
      let screen = window.screen;
      let angle = screen.orientation.angle;
      let type = screen.orientation.type;
      console.log("angle: ${angle},  type: ${type}");
    });
  });
});
