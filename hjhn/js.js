// // var sliderImages = Array.from(
// //   document.querySelectorAll(".slider-container img")
// // );
// // var slidesCount = sliderImages.length;
// // var currentSlide = 1;
// // var slidNumberElement = document.getElementById("slide-number");
// // var nextButton = document.getElementById("next");
// // var prevButton = document.getElementById("prev");

// // nextButton.onclick = nextSlide;
// // prevButton.onclick = prevSlide;

// // var paginationElements = document.createElement("ul");
// // paginationElements.id = "pagination-ul";

// // for (let i = 1; i <= slidesCount; i++) {
// //   let paginationItem = document.createElement("li");
// //   paginationItem.setAttribute("data-index", i);
// //   paginationItem.appendChild(document.createTextNode(i));
// //   paginationElements.appendChild(paginationItem);
// // }

// // document.querySelector(".indicators").appendChild(paginationElements);
// // var paginationCreatedUl = document.getElementById("pagination-ul");
// // var paginationBullets = Array.from(paginationCreatedUl.children);

// // for (var i = 0; i < paginationBullets.length; i++) {
// //   paginationBullets[i].onclick = function () {
// //     currentSlide = parseInt(this.getAttribute("data-index"));
// //     theChecker();
// //   };
// // }

// // theChecker();

// // function theChecker() {
// //   slidNumberElement.textContent =
// //     "Slide #" + currentSlide + " of " + slidesCount;

// //   removeAllActive();

// //   sliderImages[currentSlide - 1].classList.add("active");

// //   paginationElements.children[currentSlide - 1].classList.add("active");

// //   if (currentSlide == 1) {
// //     prevButton.classList.add("disabled");
// //   } else {
// //     prevButton.classList.remove("disabled");
// //   }
// //   if (currentSlide == slidesCount) {
// //     nextButton.classList.add("disabled");
// //   } else {
// //     nextButton.classList.remove("disabled");
// //   }
// // }

// // function removeAllActive() {
// //   // loop through images
// //   sliderImages.forEach((img) => {
// //     img.classList.remove("active");
// //   });
// //   paginationBullets.forEach((bullet) => {
// //     bullet.classList.remove("active");
// //   });
// // }
// // // function removeAllActiveBullets() {
// // //   paginationBullets.forEach((bullet) => {
// // //     bullet.classList.remove("Active");
// // //   });
// // // }

// // // next slide function
// // function nextSlide() {
// //   if (nextButton.classList.contains("disabled")) {
// //   } else {

// //     currentSlide++;

// //     theChecker();
// //   }
// // }
// // function prevSlide() {
// //   if (prevButton.classList.contains("disabled")) {
// //   } else {
// //     currentSlide--;
// //     theChecker();
// //   }
// // }

// let allImags = Array.from(document.querySelectorAll(".slider-container img"));
// let currentImg = 1;
// let nextButton = document.querySelector(".next");
// let prevButton = document.querySelector(".prev");
// let indicators = document.querySelector(".indicators");
// let slidContent = document.querySelector(".slide-number");

// let createdUl = document.createElement("ul");
// createdUl.class = "ul-pagination";
// indicators.appendChild(createdUl);
// for (let i = 1; i <= allImags.length; i++) {
//   let li = document.createElement("li");
//   li.setAttribute("id-num", i);
//   li.appendChild(document.createTextNode(i));
//   createdUl.appendChild(li);
// }
// let paginationBul = Array.from(createdUl.children);

// for (let i = 0; i < paginationBul.length; i++) {
//   paginationBul[i].onclick = function () {
//     currentImg = parseInt(this.getAttribute("id-num"));
//     theckeck();
//   };
// }

// theckeck();

// nextButton.onclick = nextslid;
// prevButton.onclick = prevslid;

// function theckeck() {
//   slidContent.textContent = `Slide #${currentImg} Of ${allImags.length}`;
//   removActiveClass();
//   allImags[currentImg - 1].classList.add("active");
//   paginationBul[currentImg - 1].classList.add("active");

//   if (currentImg == 1) {
//     prevButton.classList.add("disabled");
//   } else {
//     prevButton.classList.remove("disabled");
//   }
//   if (currentImg == allImags.length) {
//     nextButton.classList.add("disabled");
//   } else {
//     nextButton.classList.remove("disabled");
//   }
// }
// function removActiveClass() {
//   allImags.forEach((img) => {
//     img.classList.remove("active");
//   });
//   paginationBul.forEach((li) => {
//     li.classList.remove("active");
//   });
// }

// function nextslid() {
//   if (nextButton.classList.contains("disabled")) {
//   } else {
//     currentImg++;
//     theckeck();
//   }
// }
// function prevslid() {
//   if (prevButton.classList.contains("disabled")) {
//   } else {
//     currentImg--;
//     theckeck();
//   }
// }
// setInterval(function () {
//   if (currentImg <= allImags.length ) {
//     currentImg++;
//     if (currentImg === allImags.length + 1) {
//       currentImg = 1;
//     }
//   }

//   theckeck();
// }, 3000);

// const words = [
//   "Hello",
//   "Programming",
//   "Code",
//   "Javascript",
//   "Town",
//   "Country",
//   "Testing",
//   "Youtube",
//   "Linkedin",
//   "Twitter",
//   "Github",
//   "Leetcode",
//   "Internet",
//   "Python",
//   "Scala",
//   "Destructuring",
//   "Paradigm",
//   "Styling",
//   "Cascade",
//   "Documentation",
//   "Coding",
//   "Funny",
//   "Working",
//   "Dependencies",
//   "Task",
//   "Runner",
//   "Roles",
//   "Test",
//   "Rust",
//   "Playing",
// ];

// let lvls = {
//   Easy: 5,
//   Normal: 3,
//   Hard: 2,
// };
// let defaultLevelName = "Normal";
// let defaultLevelSeconds = lvls[defaultLevelName];
// //catch selectors
// let startButton = document.querySelector(".start");
// let lvlNameSpan = document.querySelector(".message .lvl");
// let secondsSpan = document.querySelector(".message .seconds");
// let theword = document.querySelector(".the-word");
// let upcomingWords = document.querySelector(".upcoming-words");
// let input = document.querySelector(".input");
// let timeLeftSpan = document.querySelector(".time span");
// let scoreGot = document.querySelector(".score .got");
// let scoreTotal = document.querySelector(".score .total");
// let finishMessage = document.querySelector(".finish");
// let arrayOflevels = document.querySelectorAll(".levels input")
// console.log(arrayOflevels)
// console.log(arrayOflevels.checked == true);
// lvlNameSpan.innerHTML =lvls[arrayOflevels] ;
// secondsSpan.innerHTML = defaultLevelSeconds;
// timeLeftSpan.innerHTML = defaultLevelSeconds;
// scoreTotal.innerHTML = words.length;

// input.onpaste = function () {
//   return false;
// };

// startButton.onclick = function () {
//   this.remove();
//   input.focus();
//   // theword.innerHTML = words[Math.round(Math.random() * words.length)]
//   // upcomingWords.innerHTML =""
//   // for(let i of words){
//   //   let wordDiv = document.createElement("div")
//   //   wordDiv.appendChild(document.createTextNode(i))
//   //   upcomingWords.appendChild(wordDiv)
//   // }
//   genWord();
// };
// function genWord() {
//   let randomWord = words[Math.floor(Math.random() * words.length)];
//   let wordIndex = words.indexOf(randomWord);
//   theword.innerHTML = randomWord;
//   console.log(words.length);
//   words.splice(wordIndex, 1);
//   upcomingWords.innerHTML = "";
//   for (let i = 0; i < words.length; i++) {
//     // Create Div Element
//     let div = document.createElement("div");
//     let txt = document.createTextNode(words[i]);
//     div.appendChild(txt);
//     upcomingWords.appendChild(div);
//   }
//   console.log(words.length);
//   startPlay();
// }
// function startPlay() {
//   timeLeftSpan.innerHTML = defaultLevelSeconds;
//   let start = setInterval(() => {
//     timeLeftSpan.innerHTML--;

//     if (timeLeftSpan.innerHTML === "0") {
//       clearInterval(start);

//       if (theword.innerHTML.toLowerCase() === input.value.toLowerCase()) {
//         input.value = "";
//         scoreGot.innerHTML++;

//         if (words.length > 0) {
//           genWord();
//         } else {
//           let span = document.createElement("span");
//           span.className = "good";
//           let spanText = document.createTextNode("Congratz");
//           span.appendChild(spanText);
//           finishMessage.appendChild(span);
//           upcomingWords.remove();
//         }
//       } else {
//         let span = document.createElement("span");
//         span.className = "bad";
//         let spanText = document.createTextNode("Game Over");
//         span.appendChild(spanText);
//         finishMessage.appendChild(span);
//       }
//     }
//   }, 1000);
// }

let priceMeter;
let lenghtMeter;

let radios = document.getElementsByName("marble");
let inputMter = document.getElementsByName("wall");
let bt = document.querySelector("button");

console.log(inputMter);

let totalMter = 0;
let  lastPrice;
let meterPrice 
bt.onclick = function () {
  for (let i = 0; i < inputMter.length; i++) {
    console.log(inputMter[i].value);
  
    totalMter += parseInt(inputMter[i].value) 
  }
  console.log(totalMter);
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      meterPrice = radios[i].value;
      

    }
};
lastPrice = (totalMter / 100) * meterPrice;
console.log(lastPrice)
bt.parentElement.style.opacity = "0"
showPrice();
}
function showPrice(){
  let priceDiv = document.createElement("div");
  priceDiv.className = "last-price"
  let textDiv = document.createTextNode(`حجم المطبخ هو ${totalMter / 100}متر
   السعر التقريبي هو ${lastPrice}`)
   priceDiv.appendChild(textDiv)
   document.body.appendChild(priceDiv)
}

