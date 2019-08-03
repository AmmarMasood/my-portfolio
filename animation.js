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
      offset: "-=600",
      duration: "700"
    })
    .add({
      targets: ".welcome_text h2",
      top: ["50%", "150%"],
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
