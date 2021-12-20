var prevScrollpos2 = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos2 = window.pageYOffset;
  if (prevScrollpos2 > currentScrollPos2) {
    document.getElementById("menuHeader").style.top ="0";
  } else {
    document.getElementById("menuHeader").style.top ="-150px";
  }
  prevScrollpos2 = currentScrollPos2;
}