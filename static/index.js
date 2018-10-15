sideMenuToggle = document.getElementById("sideMenuToggle");
sideMenu = document.getElementById("sidemenu");
nav = document.getElementById("nav");
toggleWrapper = nav = document.getElementById("toggleWrapper");

sideMenuToggle.addEventListener("click", function() {
  if (sideMenu.style.display === "block") {
    sideMenu.style.display = "none";
    toggleWrapper.style.backgroundColor = "#48c6ef";
    document.toggle.src = "../static/sidebar_toggler_icon_darkblue.png";
  } else {
    sideMenu.style.display = "block";
    toggleWrapper.style.backgroundColor = "#c51162";
    toggleWrapper.style.color = "white";
  }
});
