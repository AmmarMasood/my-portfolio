class TypeWriter {
  constructor(words, txtElement, wait = 3000) {
    this.words = words;
    this.txtElement = txtElement;
    this.wait = parseInt(wait, 10);
    this.wordIndex = 0;
    this.txt = "";
    this.type();
    this.isDeleting = false;
  }

  type() {
    //curent index of the word
    const current = this.wordIndex % this.words.length;
    console.log(current);
    console.log(current);
    console.log(current);
    //full word
    const fullTxt = this.words[current];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    //adding element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

document.addEventListener("DOMContentLoaded", init);

function init() {
  const txtElement = document.querySelector(".header_text--profession");
  const words = [
    "Developer",
    "Desinger",
    "Entrepreneur",
    "Student",
    "Tech Lover"
  ];
  //const jwords = JSON.parse(words);
  const wait = 3500;

  new TypeWriter(words, txtElement, wait);
}
