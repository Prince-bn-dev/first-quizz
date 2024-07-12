const tableau = [
  {
    question: "selon Einstein",
    propositions: ["E = mc", "E = d/v", "E = mc*c"],
    reponse: "E = mc*c",
  },
  {
    question: "la quantite de mouvement est",
    propositions: ["p = mv", "p = v*d", "p = d/v"],
    reponse: "p = mv",
  },
  {
    question: "la concentration massique est",
    propositions: [`Cm = m/v`, `Cm = m*c`, `Cm = p/v`],
    reponse: `Cm = m/v`,
  },
  {
    question: "le discriminant est",
    propositions: [`A =b*b +4ac`, `A = a*a`, `A = m*m`],
    reponse: `A =b*b +4ac`,
  },
];

var lesreponses = [];
for (let z = 0; z < tableau.length; z++) {
  const element = tableau[z];
  document.querySelector(".questions").insertAdjacentHTML(
    "beforeend",
    `<section class="question` +
      z +
      `"  style="display: none;">
      <p>Question ` +
      (z + 1 + " - ") +
      element.question +
      `</p>
          <button class = "quspropotion" id="` +
      z +
      `" >` +
      element.propositions[0] +
      `</button>
          <button class = "quspropotion"  id="` +
      z +
      `">` +
      element.propositions[1] +
      `</button>
          <button class = "quspropotion"  id="` +
      z +
      `">` +
      element.propositions[2] +
      `</button>
  </section>`
  );
}

function playWinSound() {
  document.getElementById("winAudio").play();
}

function playLooseSound() {
  document.getElementById("looseAudio").play();
}

document.querySelector(".question0").style.display = "block";
var Allpropotion = document.querySelectorAll(".quspropotion");
for (let m = 0; m < Allpropotion.length; m++) {
  const element = Allpropotion[m];
  element.addEventListener("click", function (e) {
    var reponsex = e.target.innerHTML;
    var questionId = e.target.id;
    lesreponses.push(reponsex);

    const questionActuellePropositions = document.querySelectorAll(
      ".question" + questionId + " button"
    );
    for (let k = 0; k < questionActuellePropositions.length; k++) {
      const element = questionActuellePropositions[k];
      element.setAttribute("disabled", "");
    }
    if (reponsex == tableau[questionId].reponse) {
      e.target.classList.add("reussite");
      playWinSound();
    } else {
      e.target.classList.add("echec");
      playLooseSound();
    }
    setTimeout(function () {
      for (let h = 0; h < lesreponses.length; h++) {
        document.querySelector(".question" + h).style.display = "none";
      }
      if (lesreponses.length < tableau.length) {
        document.querySelector(".question" + lesreponses.length).style.display =
          "block";
      } else {
        console.log(",xw,v");
        document.querySelector(".resutats").style.display = "block";
      }
    }, 5000);
  });
}
