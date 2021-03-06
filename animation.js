document.addEventListener("DOMContentLoaded", () => {
  anime
    .timeline({})
    .add({
      targets: ".welcome_cover",
      height: ["60%", "200%"],
      top: ["-90%", "100%"],
      easing: "easeOutCubic",
      duration: "1200"
    })
    .add({
      targets: ".welcome_text h2",
      top: ["-150%", "50%"],
      easing: "easeOutQuad",
      backgroundColor: "#1a1a1d",
      offset: "-=600",
      duration: "700"
    })

    .add(
      {
        targets: ".loading_logo",
        easing: "easeInOutElastic",
        backgroundColor: "#c3073f"
      },
      0
    )
    .add(
      {
        targets: ".loading_logo",
        easing: "easeInOutElastic",
        backgroundColor: "#1a1a1d"
      },
      0
    )
    .add({
      targets: ".welcome_text h2",
      top: ["50%", "150%"],
      backgroundColor: "#1a1a1d",
      easing: "easeOutQuad",
      offset: "+=1000",
      duration: "700"
    })
    .add({
      targets: ".welcome_cover",
      height: ["60%", "200%"],
      top: ["-90%", "100%"],
      easing: "easeOutCubic",
      duration: "1200",
      offset: "-=400",
      complete: anim => {
        document.querySelector(".welcome_text").style.display = "none";
        document.querySelector(".main_content").style.display = "block";
        document.querySelector(".welcome_cover").style.position = "absolute";
        document.querySelector(".welcome_content").style.position = "absolute";
        document.querySelector("html").style.overflow = "auto";
      }
    })
    .add({
      targets: ".header_text h1,h3",
      translateY: [50, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      delay: (el, i) => i * 150
    });
});

// scroll bar animation
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollpos = window.pageYOffset;
  if (prevScrollpos > currentScrollpos) {
    document.querySelector(".navbar").style.top = "0px";
  } else {
    document.querySelector(".navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollpos;
  var scroll = window.scrollY;
  if (scroll > 0) {
    document.querySelector(".navbar").classList.add("shadow");
  } else {
    document.querySelector(".navbar").classList.remove("shadow");
  }
};

// function scrollTo(to, duration) {
//   if (document.body.scrollTop == to) return;
//   var diff = to - document.body.scrollTop;
//   var scrollStep = Math.PI / (duration / 10);
//   var count = 0,
//     currPos;
//   start = window.pageYOffset;
//   scrollInterval = setInterval(function() {
//     if (document.body.scrollTop != to) {
//       count = count + 1;
//       currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
//       document.body.scrollTop = currPos;
//     } else {
//       clearInterval(scrollInterval);
//     }
//   }, 10);
// }

// function test(elID) {
//   closeNav();
//   var dest = document.getElementById(elID);
//   scrollTo(dest.offsetTop, 500);
// }
function closeNav() {
  document.querySelector("#navi-toggle").checked = false;
}
function currentYPosition() {
  // Firefox, Chrome, Opera, Safari
  if (self.pageYOffset) return self.pageYOffset;
  // Internet Explorer 6 - standards mode
  if (document.documentElement && document.documentElement.scrollTop)
    return document.documentElement.scrollTop;
  // Internet Explorer 6, 7 and 8
  if (document.body.scrollTop) return document.body.scrollTop;
  return 0;
}

function elmYPosition(eID) {
  var elm = document.getElementById(eID);
  var y = elm.offsetTop;
  var node = elm;
  while (node.offsetParent && node.offsetParent != document.body) {
    node = node.offsetParent;
    y += node.offsetTop;
  }
  return y;
}

function test(eID) {
  closeNav();
  var startY = currentYPosition();
  var stopY = elmYPosition(eID);
  var distance = stopY > startY ? stopY - startY : startY - stopY;
  if (distance < 100) {
    scrollTo(0, stopY);
    return;
  }
  var speed = Math.round(distance / 50);
  if (speed >= 20) speed = 20;
  var step = Math.round(distance / 25);
  var leapY = stopY > startY ? startY + step : startY - step;
  var timer = 0;
  if (stopY > startY) {
    for (var i = startY; i < stopY; i += step) {
      setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
      leapY += step;
      if (leapY > stopY) leapY = stopY;
      timer++;
    }
    return;
  }
  for (var i = startY; i > stopY; i -= step) {
    setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
    leapY -= step;
    if (leapY < stopY) leapY = stopY;
    timer++;
  }
}
